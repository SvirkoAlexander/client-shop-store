import "./Newsletter.scss";

import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn
} from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Adress" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy police
        </div>
        <div className="social-icons">
					<div className="icon">
						<FaFacebookF size={18}/>
					</div>
					<div className="icon">
						<FaTwitter size={18}/>
					</div>
					<div className="icon">
						<FaInstagram size={18}/>
					</div>
					<div className="icon">
						<FaLinkedinIn size={18}/>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
