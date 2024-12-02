import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components-useImmerReducer/About";
import Cart from "./components-useImmerReducer/Cart";
import CheckoutModal from "./components-useImmerReducer/CheckoutModal";
import ErrorPage from "./components-useImmerReducer/ErrorPage";
import Home from "./components-useImmerReducer/Home";
import NavBar from "./components-useImmerReducer/NavBar";
import ProductDetails from "./components-useImmerReducer/ProductDetails";
import Products from "./components-useImmerReducer/Products";
import SideBar from "./components-useImmerReducer/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="single/:id" element={<ProductDetails />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
