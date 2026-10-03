import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Luma<span>Nest</span>
          </Link>

          <p>
            Thoughtfully designed furniture for modern,
            comfortable living.
          </p>

          <div className="social-links">
            <a href="#faInstagram">
              <FaInstagram size={18} />
            </a>

            <a href="#faFacebook">
              <FaFacebookF size={18} />
            </a>

            <a href="#faTwitter">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/about">About</Link>
          <Link to="/sofa">Sofas</Link>
          <Link to="/chairs">Chairs</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/bedroom">Bedroom</Link>
        </div>

        <div className="footer-column">
          <h4>Help</h4>

          <Link to="/contact">Contact</Link>
          <a href="#s">Shipping</a>
          <a href="#r">Returns</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-column newsletter">
          <h4>Stay Inspired</h4>

          <p>
            Get design inspiration and new collection
            updates.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Your email"
            />

            <button>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 LumaNest. All rights reserved.</p>

        <div>
          <a href="#p">Privacy</a>
          <a href="#t">Terms</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;