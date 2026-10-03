import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Menu, ShoppingBag, X } from "lucide-react";

import "./Header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className="header">

      <div className="header-container">

        {/* LOGO */}

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          Luma<span>Nest</span>
        </Link>


        {/* NAVIGATION */}

        <nav
          className={`nav ${
            menuOpen ? "nav-open" : ""
          }`}
        >

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/sofa"
            onClick={closeMenu}
          >
            Sofa
          </NavLink>

          <NavLink
            to="/chairs"
            onClick={closeMenu}
          >
            Chairs
          </NavLink>

          <NavLink
            to="/dining"
            onClick={closeMenu}
          >
            Dining
          </NavLink>

          <NavLink
            to="/bedroom"
            onClick={closeMenu}
          >
            Bedroom
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>


        {/* ACTIONS */}

        <div className="header-actions">

          <Link
            to="/cart"
            className="cart-button"
            onClick={closeMenu}
            aria-label="Shopping cart"
          >

            <ShoppingBag size={20} />

            <span>
              {cartCount}
            </span>

          </Link>


          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle menu"
          >

            {menuOpen
              ? <X size={23} />
              : <Menu size={23} />
            }

          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;