import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Heart,
  ShoppingBag,
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import "./Bedroom.css";

const bedroomProducts = [
  {
    id: 1,
    name: "Luna Upholstered Bed",
    category: "Beds",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Marlow Bedside Table",
    category: "Nightstands",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85",
    tag: "New",
  },
  {
    id: 3,
    name: "Haven Platform Bed",
    category: "Beds",
    price: 1049,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
    tag: "Featured",
  },
  {
    id: 4,
    name: "Elara Nightstand",
    category: "Nightstands",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
    tag: "Popular",
  },
  {
    id: 5,
    name: "Oakline Wardrobe",
    category: "Storage",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    tag: "New",
  },
  {
    id: 6,
    name: "Cloud Linen Bench",
    category: "Bedroom Seating",
    price: 429,
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    tag: "Popular",
  },
];

const categories = [
  "All",
  "Beds",
  "Nightstands",
  "Storage",
  "Bedroom Seating",
];

function Bedroom() {
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
      ? [...bedroomProducts]
      : bedroomProducts.filter(
          (product) => product.category === activeCategory
        );

  if (sortBy === "Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bedroom-page">

      {/* ================= HERO ================= */}

      <section className="bedroom-hero">
        <div className="bedroom-hero-overlay"></div>

        <div className="bedroom-hero-content">
          <span className="bedroom-eyebrow">
            THE BEDROOM COLLECTION
          </span>

          <h1>
            Rest well.
            <br />
            <em>Live softly.</em>
          </h1>

          <p>
            Thoughtfully designed bedroom furniture created
            for slower mornings, peaceful evenings and
            beautiful everyday rituals.
          </p>

          <a
            href="#bedroom-products"
            className="bedroom-hero-btn"
          >
            Explore Bedroom
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="bedroom-hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="bedroom-intro">

        <div className="bedroom-intro-index">
          <span>01</span>
          <p>THE PLACE TO UNWIND</p>
        </div>

        <div className="bedroom-intro-content">
          <h2>
            Your bedroom should feel
            <br />
            like <em>a quiet escape.</em>
          </h2>

          <p>
            From softly upholstered beds to beautifully crafted
            storage, every LumaNest bedroom piece is designed
            to create an atmosphere of comfort, calm and
            understated luxury.
          </p>
        </div>

      </section>

      {/* ================= EDITORIAL ================= */}

      <section className="bedroom-editorial">

        <div className="bedroom-editorial-image">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=90"
            alt="Luxury bedroom"
          />

          <div className="bedroom-editorial-label">
            <span>COLLECTION 2026</span>
            <strong>THE SOFT EDIT</strong>
          </div>
        </div>

        <div className="bedroom-editorial-content">
          <span className="section-label">
            THE SOFT EDIT
          </span>

          <h2>
            Designed for
            <br />
            <em>slow mornings.</em>
          </h2>

          <p>
            Warm timber, tactile linen and soft silhouettes
            come together in a collection designed to make
            your bedroom feel naturally inviting.
          </p>

          <div className="bedroom-details">

            <div>
              <span>01</span>
              <strong>Natural Materials</strong>
              <p>Oak, linen and soft textured finishes.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Quiet Forms</strong>
              <p>Simple silhouettes without visual clutter.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Made to Last</strong>
              <p>Thoughtful construction for everyday living.</p>
            </div>

          </div>

          <Link to="/contact" className="bedroom-create-btn">
  <span>Create your bedroom</span>

  <span className="bedroom-create-arrow">
    <ArrowUpRight size={18} />
  </span>
</Link>
        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        className="bedroom-products-section"
        id="bedroom-products"
      >

        <div className="bedroom-products-heading">

          <div>
            <span className="section-label">
              THE COLLECTION
            </span>

            <h2>
              Sleep in <em>style.</em>
            </h2>
          </div>

          <p>
            Considered furniture for the most personal room
            in your home.
          </p>

        </div>

        {/* FILTER */}

        <div className="bedroom-filter-bar">

          <div className="bedroom-categories">
            <SlidersHorizontal size={17} />

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bedroom-sort">
            <label htmlFor="bedroom-sort">
              Sort:
            </label>

            <select
              id="bedroom-sort"
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

        <div className="bedroom-product-grid">

          {filteredProducts.map((product) => (
            <article
              className="bedroom-product-card"
              key={product.id}
            >

              <div className="bedroom-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="bedroom-product-tag">
                  {product.tag}
                </span>

                <button
                  className={`bedroom-wishlist ${
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
          className="bedroom-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>

              </div>

              <div className="bedroom-product-info">

                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <strong>
                  ${product.price}
                </strong>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* ================= BEDROOM PHILOSOPHY ================= */}

      <section className="bedroom-philosophy">

        <div className="bedroom-philosophy-image">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
            alt="Bedroom interior"
          />
        </div>

        <div className="bedroom-philosophy-content">

          <span className="section-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Less noise.
            <br />
            <em>More comfort.</em>
          </h2>

          <p>
            A bedroom should never feel overcrowded. We
            believe in carefully chosen pieces, generous
            proportions and natural textures that allow a
            room to breathe.
          </p>

          <div className="philosophy-points">

            <div>
              <span>01</span>
              <strong>Warmth</strong>
              <p>
                Materials that make your space feel welcoming.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Balance</strong>
              <p>
                Proportions that create a sense of calm.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Timelessness</strong>
              <p>
                Pieces designed beyond passing trends.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= BEDROOM GUIDE ================= */}

      <section className="bedroom-guide">

        <div className="bedroom-guide-heading">

          <span className="section-label">
            BUILD YOUR SPACE
          </span>

          <h2>
            A bedroom,
            <br />
            <em>layer by layer.</em>
          </h2>

        </div>

        <div className="bedroom-guide-grid">

          <div className="bedroom-guide-card">
            <span>01</span>

            <div className="guide-icon">
              BED
            </div>

            <h3>Start with the bed</h3>

            <p>
              Create the foundation of your bedroom with
              a comfortable silhouette that anchors the room.
            </p>
          </div>

          <div className="bedroom-guide-card">
            <span>02</span>

            <div className="guide-icon">
              LIGHT
            </div>

            <h3>Add warmth</h3>

            <p>
              Introduce bedside furniture and lighting to
              create a softer atmosphere.
            </p>
          </div>

          <div className="bedroom-guide-card">
            <span>03</span>

            <div className="guide-icon">
              TEXTURE
            </div>

            <h3>Layer texture</h3>

            <p>
              Finish with linen, rugs and tactile details
              that make the room feel lived in.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bedroom-cta">

        <div className="bedroom-cta-content">

          <span>MAKE SPACE FOR REST</span>

          <h2>
            Come home
            <br />
            <em>to calm.</em>
          </h2>

          <p>
            Create a bedroom that feels as good as it looks.
          </p>

          <Link
            to="/contact"
            className="bedroom-cta-btn"
          >
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Bedroom;