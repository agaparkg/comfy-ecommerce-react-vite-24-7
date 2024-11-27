function CheckoutModal() {
  return (
    // <div className="checkout-overlay show">
    <div className="checkout-overlay">
      <aside className="checkout">
        {/* close */}
        <button className="checkout-close">
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
