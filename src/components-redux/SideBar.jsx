import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowNavBar } from "../redux/comfySlice";

function SideBar() {
  const dispatch = useDispatch();
  const showNavBar = useSelector((state) => state.comfyState.showNavBar);

  const showNavbarClass = showNavBar
    ? "sidebar-overlay show"
    : "sidebar-overlay";

  return (
    <div className={showNavbarClass}>
      {/* <div className="sidebar-overlay"> */}
      <aside className="sidebar">
        {/* close */}
        <button
          onClick={() => dispatch(setShowNavBar())}
          className="sidebar-close"
        >
          <i className="fa fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <Link
              to="/"
              onClick={() => dispatch(setShowNavBar())}
              className="sidebar-link"
            >
              <i className="fa fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => dispatch(setShowNavBar())}
              className="sidebar-link"
            >
              <i className="fa fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => dispatch(setShowNavBar())}
              className="sidebar-link"
            >
              <i className="fa fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
