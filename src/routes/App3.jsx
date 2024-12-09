import { Outlet } from "react-router-dom";
import Cart from "../components-redux/Cart";
import CheckoutModal from "../components-redux/CheckoutModal";
import NavBar from "../components-redux/NavBar";
import SideBar from "../components-redux/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />
      {/* <Home /> */}
      {/* <Products /> */}
      <Outlet />
    </div>
  );
}

export default App;
