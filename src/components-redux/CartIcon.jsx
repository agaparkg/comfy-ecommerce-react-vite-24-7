import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../redux/comfySlice";

function CartIcon() {
  const cartProducts = useSelector((state) => state.comfyState.cartProducts);

  const dispatch = useDispatch();

  const cartCount = cartProducts.reduce(
    (sum, product) => sum + product.count,
    0
  );

  return (
    <div className="toggle-container">
      <button onClick={() => dispatch(setShowCart())} className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
