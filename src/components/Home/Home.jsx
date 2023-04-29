import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import BackToTop from "./BackToTop/BackToTop";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

import "./Home.scss";

import { useContext, useEffect } from "react";

const Home = () => {
  const { categories, setCategories, products ,setProducts } = useContext(Context);
	useEffect(() => {
		getProducts()
    getCategories();
	}, []);
	
	const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
					<Category categories = {categories} />
          <Products products ={products} headingText="Popular PRODUCTS" />
				</div>
				<BackToTop/>
      </div>
    </div>
  );
};

export default Home;
