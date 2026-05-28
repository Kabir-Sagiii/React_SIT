import crypto from "crypto";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

import {
  createOrderDB,
  getOrderByIdDB,
  updatePaymentStatusDB,
  getUserOrdersDB,
} from "../model/orderModel.js";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ================================
// CREATE ORDER
// ================================
export const createOrder = async (req, res) => {
  try {
    const { amount, currency = "INR", customer, carts, mode } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    // Razorpay amount should be in paisa
    const options = {
      amount: amount * 100,
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // Save Order in DB
    const orderData = {
      razorpayOrderId: razorpayOrder.id,
      amount,
      currency,
      status: "created",
      customer,
      createdAt: new Date(),
    };

    const savedOrder = await createOrderDB(orderData);

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: {
        order: razorpayOrder,
        dbOrder: savedOrder,
      },
    });
  } catch (error) {
    console.log("Create Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};

// ================================
// GET ORDER DETAILS
// ================================
export const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await getOrderByIdDB(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.log("Get Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch order",
      error: error.message,
    });
  }
};

// ================================
// VERIFY PAYMENT
// ================================
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // Create signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // Verify Signature
    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Update DB
    await updatePaymentStatusDB(razorpay_order_id, razorpay_payment_id);

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.log("Verify Payment Error:", error);

    return res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: error.message,
    });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await getUserOrdersDB(userId);

    return res.status(200).json({
      success: true,
      totalOrders: orders.length,
      data: orders,
    });
  } catch (error) {
    console.log("Get User Orders Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user orders",
      error: error.message,
    });
  }
};
