import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Navbar = (props) => {
  const onLogout = () => {
    const { history } = props;
    Cookies.remove("JWTTOKEN");
    history.replace("/login");
  };

  return (
    <header>
      <nav>
        <img
          src="https://res.cloudinary.com/chinna25/image/upload/v1693462253/Group_7420_1_xhkarr.png"
          alt="nav-img"
        />
        <ul className="unordered-list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
