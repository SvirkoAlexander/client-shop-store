import { useNavigate } from "react-router-dom";
import AboutImg from "../../assets/products/earbuds-prod-4.webp";
import AboutImg2 from "../../assets/products/headphone-prod-1.webp";
import AboutImg5 from "../../assets/products/phone1.png";
import AboutImg3 from "../../assets/products/speaker-prod-2.webp";

import "./About.scss";

import React from "react";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="headAbout">
        <h1>О нашем магазине</h1>
        <p>Лучшие цены в Минске только у нас !</p>
        <p className="desc">
          Наш интернет-магазин современной техники - это идеальное место для
          тех, кто ищет качественную и надежную технику по выгодной цене. Мы
          предлагаем широкий ассортимент товаров от ведущих мировых
          производителей, которые соответствуют самым высоким стандартам
          качества.
        </p>
        <ul>
          <li>
            Широкий ассортимент товаров от ведущих мировых производителей.
          </li>
          <li>
            Профессиональное обслуживание и консультации от наших специалистов.
          </li>
          <li>
            Удобный сервис доставки, позволяющий получить заказанный товар в
            короткие сроки.
          </li>
          <li>
            Гарантия качества нашей продукции и предоставление гарантии на
            каждый товар.
          </li>
          <li>
            Мы работаем только с лучшими производителями и гарантируем высокое
            качество нашей продукции.
          </li>
        </ul>
      </div>
      <div className="container-about">
        <section className="about">
          <div className="about-image">
            <img src={AboutImg3} alt="" />
          </div>
          <div className="about-content">
            <h2>info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia earum tenetur ipsam, fugit dolore cum rerum quas
              voluptatem corrupti voluptates tempore ab eligendi doloremque
              delectus minima deleniti accusantium aspernatur!
            </p>
          </div>
        </section>
        <section className="about2">
          <div className="about-image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="about-content">
            <h2>info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia earum tenetur ipsam, fugit dolore cum rerum quas
              voluptatem corrupti voluptates tempore ab eligendi doloremque
              delectus minima deleniti accusantium aspernatur!
            </p>
          </div>
        </section>
        <section className="about">
          <div className="about-image">
            <img src={AboutImg2} alt="" />
          </div>
          <div className="about-content">
            <h2>info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia earum tenetur ipsam, fugit dolore cum rerum quas
              voluptatem corrupti voluptates tempore ab eligendi doloremque
              delectus minima deleniti accusantium aspernatur!
            </p>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/product/1")}
            >
              Купить сейчас
            </div>
          </div>
        </section>
        <section className="about2">
          <div className="about-image">
            <img src={AboutImg3} alt="" />
          </div>
          <div className="about-content">
            <h2>info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia earum tenetur ipsam, fugit dolore cum rerum quas
              voluptatem corrupti voluptates tempore ab eligendi doloremque
              delectus minima deleniti accusantium aspernatur!
            </p>
          </div>
        </section>
        <section className="about">
          <div className="about-image">
            <img src={AboutImg5} alt="" />
          </div>
          <div className="about-content">
            <h2>info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quia earum tenetur ipsam, fugit dolore cum rerum quas
              voluptatem corrupti voluptates tempore ab eligendi doloremque
              delectus minima deleniti accusantium aspernatur!
            </p>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/product/1")}
            >
              Купить сейчас
            </div>
          </div>
        </section>
      </div>
      <div className="ctas">
        <div className="banner-cta" onClick={() => navigate("/category/1")}>
          Топ категория
        </div>
        <div className="banner-cta v2" onClick={() => navigate("/product/1")}>
          Лучший товар
        </div>
      </div>
    </>
  );
};

export default About;
