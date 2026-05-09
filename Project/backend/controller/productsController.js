import {
  getProductsData,
  getCategorySpecificData,
} from "../model/productsModel.js";
export function getAllProducts(req, res) {
  getProductsData()
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, error: "failed to fetch Products data" });
    });
}

export function getCategoryData(req, res) {
  // access category information from request query param
  const category = req.query.category;

  getCategorySpecificData(category.toLowerCase())
    .then((data) => {
      res.send({ ok: true, data: data });
    })
    .catch((error) => {
      res.send({
        ok: false,
        error: `failed to fetch ${category} category data`,
      });
    });
}
