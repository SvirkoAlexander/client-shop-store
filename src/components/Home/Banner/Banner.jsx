import { useNavigate } from "react-router-dom";
import BannerImg from "../../../assets/banner-img.png";
import "./Banner.scss";

const Banner = () => {

	const scrollDown = () => {
		window.scrollTo({
			top: window.scrollY = 3000,
			left: 0,
			behavior: 'smooth'
		});
	};

	
  const navigate = useNavigate();
  

  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Best Headphones Here</h1>
          <p>
					Наш интернет-магазин современной техники - это место, где вы найдете все необходимое для комфортной жизни и работы. Мы работаем только с лучшими производителями и гарантируем высокое качество нашей продукции. Не упустите возможность сделать выгодную покупку и обратитесь к нам уже сегодня!
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={scrollDown}>
              Наши контакты
            </div>
            <div
              className="banner-cta v2"
              onClick={() => navigate("/product/1")}
            >
              Купить сейчас
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
