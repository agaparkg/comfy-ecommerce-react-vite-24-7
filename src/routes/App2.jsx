import { useRoutes } from "react-router-dom";
import About from "../components-redux/About";
import Cart from "../components-redux/Cart";
import CheckoutModal from "../components-redux/CheckoutModal";
import ErrorPage from "../components-redux/ErrorPage";
import Home from "../components-redux/Home";
import NavBar from "../components-redux/NavBar";
import ProductDetails from "../components-redux/ProductDetails";
import Products from "../components-redux/Products";
import SideBar from "../components-redux/SideBar";
import "./App.css";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "products", element: <Products /> },
    { path: "products/single/:id", element: <ProductDetails /> },
    { path: "about", element: <About /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />
      {/* <Home /> */}
      {/* <Products /> */}
      {element}
    </div>
  );
}

export default App;
