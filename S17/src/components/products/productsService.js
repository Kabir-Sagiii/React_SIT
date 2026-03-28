import axios from "axios";

export function getAllProducts(setProducts) {
  var promiseObj = axios.get("https://fakestoreapi.com/products");

  promiseObj
    .then(function (resp) {
      //   console.log("then");
      //   console.log(resp.data);

      setProducts(resp.data);
    })
    .catch(function (error) {
      console.log("Catch");
      console.log(error);
    });
}
