// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import cors from "cors";

import UserRoute from "./routes/userRoutes.js";
import CategoriesRoute from "./routes/categoryRoutes.js";
import ProductsRoute from "./routes/productRoutes.js";
import CartRoute from "./routes/cartRoute.js";
import OrderRoute from "./routes/orderRoutes.js";
import { createMongodbConnection } from "./config/mongodbConnection.js";

const app = express();

//to get request data access
app.use(express.json());
app.use(cors());

//to forward request to the route file
app.use("/api/users", UserRoute);
app.use("/api/categories", CategoriesRoute);
app.use("/api/products", ProductsRoute);
app.use("/api/carts", CartRoute);
app.use("/api/order", OrderRoute);

//connect with Mongodb server, db, collection
createMongodbConnection();

//creates http server and starts the http server on 7878
app.listen(7878, () => {
  console.log("Http Server Started");
});
