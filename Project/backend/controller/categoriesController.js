import { getCategoriesData } from "../model/categoriesModel.js";
export function getAllCategories(req, res) {
  getCategoriesData()
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, error: "failed to fetch categories data" });
    });
}
