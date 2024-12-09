import { useDispatch, useSelector } from "react-redux";
import { setShowCheckout } from "../redux/comfySlice";

function CheckoutModal() {
  const showCheckout = useSelector((state) => state.comfyState.showCheckout);
  const dispatch = useDispatch();

  const showCheckoutClass = showCheckout
    ? "checkout-overlay show"
    : "checkout-overlay";
  return (
    <div className={showCheckoutClass}>
      <aside className="checkout">
        {/* close */}
        <button
          onClick={() => dispatch(setShowCheckout())}
          className="checkout-close"
        >
          <i className="fa fa-times"></i>
        </button>
        <h3 className="checkout-error">
          sorry, checkout is under construction at the moment!
        </h3>
      </aside>
    </div>
  );
}

export default CheckoutModal;
