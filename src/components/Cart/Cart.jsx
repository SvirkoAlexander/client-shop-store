import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";

import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const navigate = useNavigate();

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
	);
	
	const handlePayment = async () => {
		try {
			const stripe = await stripePromise
		const res = await makePaymentRequest.post("api/orders/", {
			products: cartItems,
		})

		await stripe.redirectToCheckout({
			sessionId: res.data.stripeSession.id,
		})
		} catch (error) {
			console.log(error)
		}
		
	}

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Ваша Корзина</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Закрыть</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>Нет товаров в корзине.</span>
            <button
              className="return-cta"
              onClick={() => {
                navigate("/");
                setShowCart(false);
              }}
            >
              НАЗАД К ПОКУПКАМ
            </button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem setShowCart={setShowCart} />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Итого:</span>
                <span className="text total">{cartSubTotal} $</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick ={handlePayment}>
                  Оплатить
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
