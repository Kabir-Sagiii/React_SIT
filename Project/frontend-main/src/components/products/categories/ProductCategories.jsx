import ProductCategory from "./ProductCategory";
import { toast } from "react-toastify";

function ProductCategories({ categories, setProducts }) {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      {categories.length > 0 &&
        categories.map(({ _id, image, title }) => {
          return (
            <ProductCategory
              setProducts={setProducts}
              key={_id}
              image={image}
              title={title}
            />
          );
        })}
    </div>
  );
}

export default ProductCategories;
