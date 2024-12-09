import { useDispatch } from "react-redux";
import {
  decreaseCartProductCount,
  increaseCartProductCount,
  removeProductFromCart,
} from "../redux/comfySlice";
import { formatPrice } from "../utils/utils";

const SingleCartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const {
    id,
    fields: { image, name, price },
    count,
  } = product;

  return (
    <article className="cart-item">
      <img src={image[0].url} className="cart-item-img" alt="high-back bench" />
      <div>
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{formatPrice(price)}</p>
        <button
          onClick={() => dispatch(removeProductFromCart(product))}
          className="cart-item-remove-btn"
        >
          remove
        </button>
      </div>

      <div>
        <button
          onClick={() => dispatch(increaseCartProductCount(product))}
          className="cart-item-increase-btn"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="cart-item-amount">{count}</p>
        <button
          onClick={() => dispatch(decreaseCartProductCount(product))}
          className="cart-item-decrease-btn"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  );
};

export default SingleCartProduct;
