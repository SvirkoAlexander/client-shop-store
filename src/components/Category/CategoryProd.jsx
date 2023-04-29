import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./CategoryProd.scss";

const CategoryProd = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title2</div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default CategoryProd;
