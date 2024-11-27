import PageHero from "./PageHero";

const ProductDetails = () => {
  return (
    <>
      <PageHero path="accent chair" />
      {/* product info */}
      <section className="single-product">
        <div className="section-center single-product-center">
          <img
            src=""
            className="single-product-img img"
            alt={"accent chair by caressa"}
          />
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">accent chair</h2>
              <p className="single-product-company text-slanted">by caressa</p>
              <p className="single-product-price">999.00</p>
              <div className="single-product-colors">
                <span
                  key={ind}
                  className="product-color"
                  style={{ backgroundColor: "blue" }}
                ></span>
                <span
                  key={ind}
                  className="product-color"
                  style={{ backgroundColor: "red" }}
                ></span>
                <span
                  key={ind}
                  className="product-color"
                  style={{ backgroundColor: "yellow" }}
                ></span>
              </div>
              <p className="single-product-desc">
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <button className="addToCartBtn btn">add to cart</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
