// import logoBlack from "../images/logo-black.png";
import logoWhite from "../images/logo-white.png";
import CartIcon from "./CartIcon";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  return (
    <nav className="navbar">
      {/* <nav className="navbar page"> */}
      <div className="nav-center">
        <NavBarLinks />
        <img src={logoWhite} className="nav-logo" alt="logo" />
        {/* <img src={logoBlack} className="nav-logo" alt="logo" /> */}
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
