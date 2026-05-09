import { connectWithDB_Collection } from "../config/mongodbConnection.js";
const collection = connectWithDB_Collection("ecommerce-ai-db", "products");
export function getProductsData() {
  return collection.find().toArray();
}

export function getCategorySpecificData(category) {
  if (category === "all") {
    return collection.find().toArray();
  } else {
    return collection.find({ category: category }).toArray();
  }
}
