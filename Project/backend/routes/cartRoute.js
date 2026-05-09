import { Router } from "express";
import {
  addtoCart,
  getAllCart,
  deleteCart,
} from "../controller/cartController.js";
const route = Router();

route.post("/cart", addtoCart);
//http://localhost:7878/api/carts/cart

route.delete("/cart", deleteCart);
//http://localhost:7878/api/carts/cart

route.get("/cart", getAllCart);
//http://localhost:7878/api/carts/cart

export default route;
