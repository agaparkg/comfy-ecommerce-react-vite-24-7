import { useDispatch, useSelector } from "react-redux";
import { setShowCheckout } from "../redux/comfySlice";
import { formatPrice } from "../utils/utils";

function Footer() {
  const cartProducts = useSelector((state) => state.comfyState.cartProducts);

  const dispatch = useDispatch();

  const totalCartPrice = cartProducts.reduce((sum, item) => {
    return sum + item.fields.price * item.count;
  }, 0);

  return (
    <footer>
      <h3 className="cart-total text-slanted">
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button
        onClick={() => dispatch(setShowCheckout())}
        className="cart-checkout btn"
      >
        checkout
      </button>
    </footer>
  );
}

export default Footer;
