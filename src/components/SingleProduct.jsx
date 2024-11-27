const SingleProduct = () => {
  return (
    <article className="product">
      <div className="product-container">
        <img
          src="https://course-api.com/images/store/product-1.jpeg"
          className="product-img img"
          alt=""
        />

        <div className="product-icons">
          <button className="product-icon">
            <i className="fa fa-search"></i>
          </button>
          <button className="product-cart-btn product-icon">
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p className="product-name">accent chair caressa</p>
        <h4 className="product-price">999.00</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;
