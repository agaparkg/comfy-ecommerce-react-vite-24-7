const SingleCartProduct = () => {
  return (
    <article className="cart-item">
      <img
        src="https://course-api.com/images/store/product-1.jpeg"
        className="cart-item-img"
        alt="high-back bench"
      />
      <div>
        <h4 className="cart-item-name">accent chair</h4>
        <p className="cart-item-price">999.00</p>
        <button className="cart-item-remove-btn">remove</button>
      </div>

      <div>
        <button className="cart-item-increase-btn">
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="cart-item-amount">9</p>
        <button className="cart-item-decrease-btn">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  );
};

export default SingleCartProduct;
