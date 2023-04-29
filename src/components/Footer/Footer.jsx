import { FaEnvelope, FaLocationArrow, FaMobile } from "react-icons/fa";
import Payment from '../../assets/payments.png'


import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur quasi dignissimos tenetur reprehenderit quisquam optio
            neque illo non unde adipisci.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
              in.
            </div>
          </div>
          <div className="c-item">
            <FaMobile />
            <div className="text">Phone number +37529 555 55 55</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: svirkonp@yandex.by</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart waches</span>
          <span className="text">Blutooth speakers</span>
          <span className="text">wirelles earbuds</span>
          <span className="text">Home theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy police</div>
          <div className="text">Returns</div>
          <div className="text">Term</div>
          <div className="text">Contact Us</div>
				</div>			
			</div>
			<div className="bottom-bar">
				<div className="bottom-bar-content">
					<div className="text">
					&copy; GIFTEDVISION 2023 CREATED BY SVIRKO ALEXANDER.
					</div>
					<img src={Payment} alt="" />
				</div>
			</div>
    </footer>
  );
};

export default Footer;
