import Footer from "./Footer";

function Cart() {
  return (
    // <div className="cart-overlay show">
    <div className="cart-overlay">
      <aside className="cart">
        <button className="cart-close">
          <i className="fa fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        {/* cart items */}
        <div className="cart-items">{/* <SingleCartProduct /> */}</div>
        {/* footer */}
        <Footer />
      </aside>
    </div>
  );
}

export default Cart;
