import express from "express";
import {
  createOrder,
  getOrderDetails,
  verifyPayment,
  getUserOrders,
} from "../controller/orderController.js";

const router = express.Router();

// Create Razorpay Order
router.post("/create-order", createOrder);
// http://localhost:7878/api/order/create-order

// Get Order Details
router.get("/:orderId", getOrderDetails);

// Verify Razorpay Payment
router.post("/verify-payment", verifyPayment);
// http://localhost:7878/api/order/verify-payment

// Get All Orders Of User
router.get("/user/:userId", getUserOrders);
// http://localhost:7878/api/order/user/<id>

export default router;
