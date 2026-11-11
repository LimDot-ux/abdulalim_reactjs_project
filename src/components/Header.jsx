
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ title, cartCount }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        {title}
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-link">
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
