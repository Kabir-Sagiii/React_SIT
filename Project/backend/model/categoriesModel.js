import { connectWithDB_Collection } from "../config/mongodbConnection.js";
const collection = connectWithDB_Collection(
  "ecommerce-ai-db",
  "productcategories",
);

export function getCategoriesData() {
  return collection.find().toArray();
}
