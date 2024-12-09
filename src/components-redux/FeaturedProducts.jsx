import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsLoading } from "../redux/comfySlice";
import SingleProduct from "./SingleProduct";

function FeaturedProducts() {
  const isLoading = useSelector((state) => state.comfyState.isLoading);
  const featuredProducts = useSelector(
    (state) => state.comfyState.featuredProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLoading(true));
    }, 500);
  }, []);

  return (
    <section className="section featured">
      <div className="title">
        <h2>
          <span>/</span> featured
        </h2>
      </div>
      <div className="featured-center section-center">
        {!isLoading ? (
          <h2 className="section-loading">loading...</h2>
        ) : (
          featuredProducts.map((fp) => (
            <SingleProduct product={fp} key={fp.id} />
          ))
        )}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </section>
  );
}

export default FeaturedProducts;
