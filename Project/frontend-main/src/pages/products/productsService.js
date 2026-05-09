import axios from "axios";
import { toast } from "react-toastify";
export const getAllCategories = (setCategories, setProducts) => {
  axios
    .get("http://localhost:7878/api/categories/get-all-categories")
    .then((res) => {
      if (res.data.ok) {
        setCategories(res.data.result);
        console.log(res.data.result);
        getAllProducts(setProducts);
      } else {
        throw Error();
      }
    })
    .catch((error) => {
      toast.error("failed to access categories", { autoClose: 1500 });
      console.log(error);
    });
};

export function getAllProducts(setProducts) {
  axios
    .get("http://localhost:7878/api/products/get-all-products")
    .then((res) => {
      if (res.data.ok) {
        setProducts(res.data.result);
      } else {
        throw Error();
      }
    })
    .catch((error) => {
      toast.error("failed to access categories", { autoClose: 1500 });
      console.log(error);
    });
}
