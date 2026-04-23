import { connectWithDB_Collection } from "../config/mongodbConnection.js";
const collection = connectWithDB_Collection("ecommerce-ai-db", "users");

export function insertData(newuser) {
  return collection.insertOne(newuser);
}

export function checkUser({ email, password }) {
  return collection.findOne({ email, password });
}

export function getAllUsersData() {
  return collection.find().toArray();
}
