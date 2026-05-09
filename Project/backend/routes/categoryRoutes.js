import { Router } from "express";
import { getAllCategories } from "../controller/categoriesController.js";

const route = Router();

route.get("/get-all-categories", getAllCategories);

//http://localhost:7878/api/categories/get-all-categories

export default route;
