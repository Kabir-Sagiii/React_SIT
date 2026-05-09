import { Router } from "express";
import {
  getAllProducts,
  getCategoryData,
} from "../controller/productsController.js";

const route = Router();

route.get("/get-all-products", getAllProducts);
//http://localhost:7878/api/products/get-all-products

route.get("/category-data", getCategoryData);
// http://localhost:7878/api/products/category-data

export default route;
