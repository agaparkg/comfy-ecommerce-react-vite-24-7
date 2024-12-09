import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components-redux/About";
import Cart from "./components-redux/Cart";
import CheckoutModal from "./components-redux/CheckoutModal";
import ErrorPage from "./components-redux/ErrorPage";
import Home from "./components-redux/Home";
import NavBar from "./components-redux/NavBar";
import ProductDetails from "./components-redux/ProductDetails";
import Products from "./components-redux/Products";
import SideBar from "./components-redux/SideBar";

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
