import { insertData, getAllUsersData, checkUser } from "../model/userModel.js";
export function signup(req, res) {
  //access the data from request
  const data = req.body;

  //Insrtion Operation
  insertData(data)
    .then(() => {
      res.send({ ok: true, message: "User Created Account Successfully" });
    })
    .catch(() => {
      res.send({ ok: false, error: "Failed to Create Account" });
    });
}

export function signin(req, res) {
  const data = req.body;
  checkUser(data)
    .then((user) => {
      if (user) {
        res.send({ ok: true, message: "valid user", user });
      } else {
        throw Error("Failed to Login,Check username or password");
      }
    })
    .catch((error) => {
      res.send({ ok: false, error: error.message });
    });
}

export function getAllUsers(req, res) {
  getAllUsersData()
    .then((users) => {
      res.send({ ok: true, result: users });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, error: error });
    });
}
