import axios from "axios";

export function getAllProducts(setProducts) {
  var promiseObj = axios.get("https://randomuser.me/api/?results=50");

  promiseObj
    .then(function (resp) {
      //   console.log("then");
      // console.log(resp.data);

      setProducts(resp.data.results);
    })
    .catch(function (error) {
      console.log("Catch");
      console.log(error);
    });
}
