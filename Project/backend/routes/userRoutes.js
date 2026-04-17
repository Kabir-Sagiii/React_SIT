import { Router } from "express";
import { getAllUsers, signup } from "../controller/userController.js";
const route = Router();

route.get("/get-all-users", getAllUsers);
//http://localhost:7878/api/users/get-all-users

route.post("/signup", signup);
//http://localhost:7878/api/users/signup

export default route;
