import { useState } from "react";
import {
  Heart,
  ShoppingBag,
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./Chair.css";

function Chairs() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: "Arco Lounge Chair",
      category: "Lounge",
      price: 18500,
      material: "Bouclé Fabric",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85",
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Mira Accent Chair",
      category: "Accent",
      price: 15900,
      material: "Natural Linen",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85",
      tag: "New",
    },
    {
      id: 3,
      name: "Elio Dining Chair",
      category: "Dining",
      price: 8900,
      material: "Solid Oak",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=85",
      tag: "",
    },
    {
      id: 4,
      name: "Nola Easy Chair",
      category: "Lounge",
      price: 21900,
      material: "Textured Cotton",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
      tag: "",
    },
    {
      id: 5,
      name: "Sora Dining Chair",
      category: "Dining",
      price: 9500,
      material: "Walnut Wood",
      image:
        "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1000&q=85",
      tag: "New",
    },
    {
      id: 6,
      name: "Lena Accent Chair",
      category: "Accent",
      price: 16900,
      material: "Soft Velvet",
      image:
        "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?auto=format&fit=crop&w=1000&q=85",
      tag: "",
    },
  ];

  const categories = [
    "All",
    "Lounge",
    "Accent",
    "Dining",
  ];

  let filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  if (sort === "Low to High") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "High to Low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="chairs-page">

      {/* ================= HERO ================= */}

      <section className="chairs-hero">

        <div className="chairs-hero-content">

          <span>THE CHAIR COLLECTION</span>

          <h1>
            Take a seat.
            <br />
            <i>Stay awhile.</i>
          </h1>

          <p>
            Sculptural silhouettes, natural materials and
            everyday comfort. Discover chairs designed to
            become part of your favourite spaces.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="chairs-intro">

        <div className="chairs-intro-number">
          02
        </div>

        <div className="chairs-intro-content">

          <h2>
            Small details.
            <br />
            <i>Big comfort.</i>
          </h2>

          <p>
            From the dining table to your favourite reading
            corner, our chairs combine practical comfort
            with considered design.
          </p>

        </div>

      </section>


      {/* ================= FEATURED CHAIR ================= */}

      <section className="chair-feature">

        <div className="chair-feature-image">

          <img
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1800&q=90"
            alt="Arco lounge chair"
          />

          <div className="feature-number">
            01 / 06
          </div>

        </div>

        <div className="chair-feature-content">

          <span>FEATURED PIECE</span>

          <h2>
            Arco
            <br />
            <i>Lounge Chair</i>
          </h2>

          <p>
            A generously curved silhouette designed to
            support long conversations, quiet reading
            sessions and everything between.
          </p>

          <div className="feature-details">

            <div>
              <span>MATERIAL</span>
              <strong>Bouclé & Oak</strong>
            </div>

            <div>
              <span>PRICE</span>
              <strong>₹18,500</strong>
            </div>

          </div>

          <button className="feature-button">
            Shop Chair
            <ArrowUpRight size={18} />
          </button>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="chairs-products">

        <div className="chairs-section-heading">

          <div>
            <span>THE COLLECTION</span>

            <h2>
              Chairs for
              <i> every corner.</i>
            </h2>
          </div>

          <p>
            Explore lounge chairs, dining chairs and
            accent pieces designed for modern living.
          </p>

        </div>


        {/* TOOLBAR */}

        <div className="chairs-toolbar">

          <div className="chair-category-filter">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item ? "active" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}

          </div>

          <div className="chair-sort">

            <SlidersHorizontal size={16} />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Featured</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>

          </div>

        </div>


        {/* PRODUCT GRID */}

        <div className="chairs-grid">

          {filteredProducts.map((product) => (

            <article
              className="chair-product"
              key={product.id}
            >

              <div className="chair-product-image">

                {product.tag && (
                  <span className="chair-tag">
                    {product.tag}
                  </span>
                )}

                <button
                  className={`chair-wishlist ${
                    wishlist.includes(product.id)
                      ? "liked"
                      : ""
                  }`}
                  onClick={() =>
                    toggleWishlist(product.id)
                  }
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

                <img
                  src={product.image}
                  alt={product.name}
                />

<button
  className="chair-add-cart"
  onClick={() => dispatch(addToCart(product))}
>
  <ShoppingBag size={16} />
  Add to Cart
</button>

              </div>

              <div className="chair-product-info">

                <div>

                  <h3>{product.name}</h3>

                  <p>
                    {product.material} ·{" "}
                    {product.category}
                  </p>

                </div>

                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= MATERIAL SECTION ================= */}

      <section className="chair-material">

        <div className="chair-material-image">

          <img
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1800&q=90"
            alt="Natural chair material"
          />

        </div>

        <div className="chair-material-content">

          <span>HONEST MATERIALS</span>

          <h2>
            Made to look
            <br />
            <i>better with time.</i>
          </h2>

          <p>
            We choose materials that age gracefully.
            Solid wood develops character, natural fabrics
            become softer and every piece tells a little
            more of your story over time.
          </p>

          <div className="material-list">

            <div>
              <span>01</span>
              <strong>Natural Wood</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Linen & Cotton</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Premium Bouclé</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="chairs-cta">

        <span>MAKE ROOM FOR COMFORT</span>

        <h2>
          Find your
          <br />
          <i>perfect seat.</i>
        </h2>

        <p>
          Thoughtfully designed chairs for every
          moment of everyday life.
        </p>

      </section>

    </div>
  );
}

export default Chairs;