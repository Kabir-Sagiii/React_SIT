import express from "express";
import UserRoute from "./routes/userRoutes.js";

const app = express();

//to get request data access
app.use(express.json());

//to forward request to the route file
app.use("/api/users", UserRoute);

//creates http server and starts the http server on 7878
app.listen(7878, () => {
  console.log("Http Server Started");
});
