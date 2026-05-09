import { addInCart, removeFromCart, getFromCart } from "../model/cartModel.js";
export function addtoCart(req, res) {
  const data = req.body;
  // console.log(data);
  addInCart(data)
    .then((data) => {
      res.send({ ok: true, message: "cart added" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, message: "failed to add in cart" });
    });
}

export function getAllCart(req, res) {
  getFromCart(req.query.userid)
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, message: "failed to access data from cart" });
    });
}

export function deleteCart(req, res) {
  removeFromCart(req.query.id)
    .then((data) => {
      res.send({ ok: true, result: "product removed from the cart" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, message: "failed to remove data from cart" });
    });
}
