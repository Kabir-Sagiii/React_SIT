import { Router } from "express";
import { getAllUsers, signup, signin } from "../controller/userController.js";
const route = Router();

route.get("/get-all-users", getAllUsers);
//http://localhost:7878/api/users/get-all-users

route.post("/signup", signup);
//http://localhost:7878/api/users/signup

route.post("/sign-in", signin);
//http://localhost:7878/api/users/sign-in
export default route;
