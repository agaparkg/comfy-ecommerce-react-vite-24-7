import { Outlet } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

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
