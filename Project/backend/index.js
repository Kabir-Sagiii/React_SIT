import express from "express";

const app = express();

app.listen(7878, () => {
  console.log("Http Server Started");
});

//endpoint
app.get("/getData", (req, res) => {
  res.send("<h1>Welcome to Backend Development with React JS as Frontend</h1>");
});
// http://localhost:7878/getData

app.post("/login", function (req, res) {});
// http://localhost:7878/login

app.put("/updateuser", function (req, res) {});
// http://localhost:7878/updateuser

app.delete("/removeuser", function (req, res) {});
// http://localhost:7878/removeuser
