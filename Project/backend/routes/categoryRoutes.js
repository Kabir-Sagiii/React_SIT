import { Router } from "express";
import { getAllCategories } from "../controller/categoriesController";
const route = Router();

route.get("/get-all-categories", getAllCategories);

export default route;
