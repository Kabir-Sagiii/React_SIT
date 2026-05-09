import { connectWithDB_Collection } from "../config/mongodbConnection.js";
import { ObjectId } from "mongodb";
const collection = connectWithDB_Collection("ecommerce-ai-db", "carts");
export function addInCart(data) {
  return collection.insertOne(data);
}

export function getFromCart(id) {
  console.log(id);
  return collection.find({ userid: id }).toArray();
}

export function removeFromCart(id) {
  return collection.deleteOne({ _id: new ObjectId(id) });
}
