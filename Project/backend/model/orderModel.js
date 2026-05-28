import { connectWithDB_Collection } from "../config/mongodbConnection.js";
import { ObjectId } from "mongodb";
const collection = connectWithDB_Collection("ecommerce-ai-db", "orders");

// ================================
// CREATE ORDER
// ================================
export const createOrderDB = async (orderData) => {
  try {
    const result = await collection.insertOne(orderData);

    return {
      _id: result.insertedId,
      ...orderData,
    };
  } catch (error) {
    throw error;
  }
};

// ================================
// GET ORDER BY ID
// ================================
export const getOrderByIdDB = async (orderId) => {
  try {
    const order = await collection.findOne({
      _id: new ObjectId(orderId),
    });

    return order;
  } catch (error) {
    throw error;
  }
};

// ================================
// UPDATE PAYMENT STATUS
// ================================
export const updatePaymentStatusDB = async (
  razorpayOrderId,
  razorpayPaymentId,
) => {
  try {
    const result = await collection.updateOne(
      {
        razorpayOrderId,
      },
      {
        $set: {
          status: "paid",
          razorpayPaymentId,
          paidAt: new Date(),
        },
      },
    );

    return result;
  } catch (error) {
    throw error;
  }
};

export const getUserOrdersDB = async (userId) => {
  try {
    const collection = db.collection(ORDER_COLLECTION);

    const orders = await collection
      .find({
        userId,
      })
      .sort({
        createdAt: -1,
      })
      .toArray();

    return orders;
  } catch (error) {
    throw error;
  }
};
