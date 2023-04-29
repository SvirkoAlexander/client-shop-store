import React, { useEffect, useState } from "react";
import "./BackToTop.scss";
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`buttonTop ${backToTopButton ? "sticky1" : ""}`} onClick={scrollUp}>
			{backToTopButton && <div><BsFillArrowUpSquareFill/></div>}
			
    </div>
  );
};

export default BackToTop;
