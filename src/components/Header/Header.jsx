import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import {AiOutlineMenu} from 'react-icons/ai'
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";

import Cart from "../Cart/Cart";
import DropDown from "./DropDown/DropDown";

import { useContext } from "react";
import { Context } from "../../utils/context";
import "./Header.scss";
import Search from "./Search/Search";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const [showDrop, setShowDrop] = useState(false);
	
  const { cartCount } = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
	};
	
	const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Главная</li>
            <li onClick={() => navigate("/about/")}>О нас</li>
						<li onClick={() => navigate("/category/1")}>Популярное</li>
						
						
					</ul>
					
					

          <div onClick={() => navigate("/")} className="center">
            HEADPHONE | STORE &trade;
          </div>
          <div className="right">
						<AiOutlineMenu onClick={() => setShowDrop((prev) => !prev)} />
						{
							showDrop && <DropDown/> 
						}
            <FiSearch onClick={() => setShowSearch(true)} />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <HiOutlineShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
			</header>
			
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
