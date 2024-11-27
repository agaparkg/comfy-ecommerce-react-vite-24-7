function CartIcon() {
  return (
    <div className="toggle-container">
      <button className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">5</span>
    </div>
  );
}

export default CartIcon;
