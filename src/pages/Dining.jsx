import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./Dining.css";



const diningProducts = [
  {
    id: 1,
    name: "Oakline Dining Table",
    category: "Dining Tables",
    price: 589,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Mira Dining Chair",
    category: "Dining Chairs",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53e1a9a1?auto=format&fit=crop&w=1200&q=85",
    tag: "New",
  },
  {
    id: 3,
    name: "Nordic Six Seater",
    category: "Dining Tables",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=85",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Lena Dining Chair",
    category: "Dining Chairs",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1200&q=85",
    tag: "New",
  },
  {
    id: 5,
    name: "Linea Dining Set",
    category: "Dining Sets",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85",
    tag: "Featured",
  },
  {
    id: 6,
    name: "Arlo Round Table",
    category: "Dining Tables",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    tag: "Popular",
  },
];

const categories = [
  "All",
  "Dining Tables",
  "Dining Chairs",
  "Dining Sets",
];

function Dining() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  let filteredProducts =
    activeCategory === "All"
      ? [...diningProducts]
      : diningProducts.filter(
          (product) => product.category === activeCategory
        );

  if (sortBy === "Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="dining-page">

      {/* HERO */}
      <section className="dining-hero">
        <div className="dining-hero-overlay"></div>

        <div className="dining-hero-content">
          <span className="dining-eyebrow">
            THE DINING COLLECTION
          </span>

          <h1>
            Gather.
            <br />
            <em>Dine beautifully.</em>
          </h1>

          <p>
            Thoughtfully designed dining furniture made for
            slow mornings, long conversations and memorable
            evenings.
          </p>

          <a href="#dining-products" className="dining-hero-btn">
            Explore Dining
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="dining-hero-number">
          04 / 07
        </div>
      </section>

      {/* INTRO */}
      <section className="dining-intro">
        <div className="dining-intro-small">
          <span>01</span>
          <p>THE HEART OF HOME</p>
        </div>

        <div className="dining-intro-main">
          <h2>
            A table is more than
            <br />
            <em>a piece of furniture.</em>
          </h2>

          <p>
            It is where stories begin, meals are shared and
            everyday moments become memories. Our dining
            collection brings warmth, simplicity and timeless
            craftsmanship to the centre of your home.
          </p>
        </div>
      </section>

      {/* FEATURED SET */}
      <section className="dining-featured">
        <div className="dining-featured-image">
          <img
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=90"
            alt="LumaNest dining table"
          />

          <div className="dining-image-label">
            <span>DESIGNED FOR</span>
            <strong>EVERYDAY RITUALS</strong>
          </div>
        </div>

        <div className="dining-featured-content">
          <span className="section-label">
            FEATURED COLLECTION
          </span>

          <h2>
            The art of
            <br />
            <em>gathering.</em>
          </h2>

          <p>
            Natural oak surfaces, sculptural silhouettes and
            comfortable seating come together to create a dining
            space that feels effortlessly refined.
          </p>

          <div className="dining-featured-details">
            <div>
              <span>01</span>
              <p>Natural Oak</p>
            </div>

            <div>
              <span>02</span>
              <p>Hand Finished</p>
            </div>

            <div>
              <span>03</span>
              <p>Built to Last</p>
            </div>
          </div>

          <Link to="/contact" className="dining-enquire-btn">
  <span>Enquire about this collection</span>
  <span className="dining-enquire-arrow">
    <ArrowUpRight size={18} />
  </span>
</Link>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        className="dining-products-section"
        id="dining-products"
      >
        <div className="dining-products-header">
          <div>
            <span className="section-label">
              THE COLLECTION
            </span>

            <h2>
              Dining, <em>reimagined.</em>
            </h2>
          </div>

          <p>
            Six considered pieces designed to bring people
            together.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="dining-filter-bar">

          <div className="dining-categories">
            <SlidersHorizontal size={17} />

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="dining-sort">
            <label htmlFor="dining-sort">
              Sort:
            </label>

            <select
              id="dining-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Featured</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="dining-product-grid">
          {filteredProducts.map((product) => (
            <article
              className="dining-product-card"
              key={product.id}
            >
              <div className="dining-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="dining-product-tag">
                  {product.tag}
                </span>

                <button
                  className={`wishlist-btn ${
                    wishlist.includes(product.id)
                      ? "liked"
                      : ""
                  }`}
                  onClick={() =>
                    toggleWishlist(product.id)
                  }
                  aria-label="Add to wishlist"
                >
                  <Heart
                    size={19}
                    fill={
                      wishlist.includes(product.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <button
  className="dining-cart-btn"
  onClick={() => dispatch(addToCart(product))}
>
  <ShoppingBag size={17} />
  Add to Cart
</button>
              </div>

              <div className="dining-product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <strong>${product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="dining-materials">

        <div className="dining-materials-content">
          <span className="section-label">
            MATERIAL MATTERS
          </span>

          <h2>
            Made from
            <br />
            <em>the good stuff.</em>
          </h2>

          <p>
            We believe beautiful furniture begins with honest
            materials. From warm oak to natural linen, every
            material is selected for its character, durability
            and ability to age beautifully.
          </p>

          <div className="material-list">
            <div>
              <span>01</span>
              <strong>Solid Oak</strong>
              <p>Warm, durable and naturally beautiful.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Natural Linen</strong>
              <p>Soft texture with an effortless finish.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Handcrafted Details</strong>
              <p>Small details that make every piece special.</p>
            </div>
          </div>
        </div>

        <div className="dining-materials-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Dining furniture details"
          />
        </div>

      </section>

      {/* CTA */}
      <section className="dining-cta">
        <div className="dining-cta-content">
          <span>MAKE ROOM FOR MORE</span>

          <h2>
            Bring everyone
            <br />
            <em>to the table.</em>
          </h2>

          <p>
            Find pieces designed for everyday meals and
            extraordinary moments.
          </p>

          <Link to="/contact" className="dining-cta-btn">
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Dining;