import { useState } from "react";
import { products } from "../assets/products-data";
import PageHero from "./PageHero";
import SingleProduct from "./SingleProduct";

function Products() {
  const [priceInputVal, setPriceInputVal] = useState(50);
  const [searchVal, setSearchVal] = useState("");
  const [companyName, setCompanyName] = useState("all");

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceInputVal(+value);
  };

  const changeCompanyProducts = (name) => {
    setCompanyName(name);
  };

  const handleProductSearch = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };

  return (
    <>
      <PageHero path="/products" />
      <section className="products">
        {/* filters */}
        <div className="filters">
          <div className="filters-container">
            {/* search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
                value={searchVal}
                onChange={handleProductSearch}
              />
              {searchVal && (
                <i
                  onClick={() => setSearchVal("")}
                  className="fa fa-times clear-search"
                ></i>
              )}
            </form>
            {/* companies list */}
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn active">ikea</button>
              <button className="company-btn">marcos</button>
              <button className="company-btn">caressa</button>
              {/* "company-btn active" : "company-btn" */}
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                min="0"
                value={priceInputVal}
                max="100"
                onChange={handlePriceChange}
              />
            </form>
            <p className="price-value">Value: ${priceInputVal}</p>
          </div>
        </div>
        {/* products */}
        <div className="products-container">
          <SingleProduct fp={products[0]} key={products[0].id} />
          <SingleProduct fp={products[1]} key={products[1].id} />
          <h3 className="filter-error">
            sorry, no products matched your search
          </h3>
        </div>
      </section>
    </>
  );
}

export default Products;
