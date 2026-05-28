import { toast } from "react-toastify";
import axios from "axios";
import cartsActionCreator from "../../actions/cartsAction";
import store from "../../store/store";

export function getAllCarts(setCarts, id) {
  axios
    .get("http://localhost:7878/api/carts/cart", {
      params: {
        userid: id,
      },
    })
    .then((res) => {
      store.dispatch(cartsActionCreator(res.data.result));
      setCarts(res.data.result);
    })
    .catch(() => {
      toast.error("Failed to access Cart Data");
    });
}

export function removeProductFromCart(id, setCarts, userid) {
  axios
    .delete("http://localhost:7878/api/carts/cart", {
      params: {
        id: id,
      },
    })
    .then((res) => {
      toast.success("product removed from cart");
      getAllCarts(setCarts, userid);
    })
    .catch(() => {
      toast.error("Failed to access Cart Data");
    });
}
