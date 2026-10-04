import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./Sofa.css";

function Sofa() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [wishlist, setWishlist] = useState([]);
 
  const products = [
    {
      id: 1,
      name: "Luna Lounge Sofa",
      category: "3 Seater",
      price: 48900,
      material: "Soft Linen",
      image:
        "https://i.pinimg.com/736x/c8/9b/a4/c89ba41ce1360b39e64fd1e5e2512c41.jpg",
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Cloud Modular Sofa",
      category: "Modular",
      price: 62900,
      material: "Bouclé Fabric",
      image:
        "https://i.pinimg.com/736x/7f/9f/f6/7f9ff6cf90a1a252da817094e425a4f7.jpg",
      tag: "New",
    },
    {
      id: 3,
      name: "Aria Curved Sofa",
      category: "2 Seater",
      price: 42900,
      material: "Premium Linen",
      image:
        "https://i.pinimg.com/736x/06/20/64/0620648cde0dc23d996c5a3056786457.jpg",
      tag: "",
    },
    {
      id: 4,
      name: "Milo Comfort Sofa",
      category: "3 Seater",
      price: 55900,
      material: "Cotton Blend",
      image:
        "https://i.pinimg.com/1200x/38/c9/7f/38c97f544b186acff07fd2c7cb171fb1.jpg",
      tag: "",
    },
    {
      id: 5,
      name: "Nora Sectional",
      category: "Sectional",
      price: 74900,
      material: "Textured Fabric",
      image:
        "https://i.pinimg.com/1200x/bc/61/0f/bc610fd683a0aeba6105778add52ecbd.jpg",
      tag: "New",
    },
    {
      id: 6,
      name: "Siena Relax Sofa",
      category: "2 Seater",
      price: 39900,
      material: "Natural Linen",
      image:
        "https://i.pinimg.com/736x/be/8f/12/be8f1230936c11ec60c7c1b6299505b8.jpg",
      tag: "",
    },
  ];

  const categories = [
    "All",
    "2 Seater",
    "3 Seater",
    "Modular",
    "Sectional",
  ];

  let filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

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
    <div className="sofa-page">

      {/* HERO */}
      <section className="sofa-hero">

        <div className="sofa-hero-content">

          <span>THE SOFA COLLECTION</span>

          <h1>
            Sit back.
            <br />
            <i>Stay awhile.</i>
          </h1>

          <p>
            Designed around comfort, crafted with character.
            Discover sofas made for slow mornings,
            long conversations and everything in between.
          </p>

        </div>

      </section>


      {/* INTRO */}
      <section className="sofa-intro">

        <div className="sofa-intro-number">
          01
        </div>

        <div>
          <h2>
            Comfort,
            <i> considered.</i>
          </h2>

          <p>
            Every LumaNest sofa is designed with balance
            in mind — generous proportions, supportive
            cushions and carefully selected fabrics.
          </p>
        </div>

      </section>


      {/* COLLECTION TOOLBAR */}
      <section className="sofa-products">

        <div className="sofa-toolbar">

          <div className="category-filter">

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

          <div className="sort-area">

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


        {/* PRODUCTS */}
        <div className="sofa-grid">

          {filteredProducts.map((product) => (

            <article
              className="sofa-product"
              key={product.id}
            >

              <div className="sofa-product-image">

                {product.tag && (
                  <span className="sofa-tag">
                    {product.tag}
                  </span>
                )}

                <button
                  className={`wishlist ${
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
  className="add-cart-btn"
  onClick={() => dispatch(addToCart(product))}
>
  <ShoppingBag size={18} />
  Add to Cart
</button>

              </div>


              <div className="sofa-product-info">

                <div>

                  <h3>{product.name}</h3>

                  <p>
                    {product.material} · {product.category}
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


      {/* DESIGN SECTION */}
      <section className="sofa-design">

        <div className="sofa-design-image">

          <img
            src="https://i.pinimg.com/1200x/5f/ee/83/5fee83eaa59edf02d38faa53cb3aaf2f.jpg"
            alt="Sofa interior"
          />

        </div>

        <div className="sofa-design-content">

          <span>MADE FOR LIVING</span>

          <h2>
            A sofa isn't
            <br />
            <i>just a sofa.</i>
          </h2>

          <p>
            It's where Sunday mornings begin, where friends
            gather after dinner and where the best stories
            somehow always happen.
          </p>

          <p>
            That's why we obsess over every detail —
            from the depth of the seat to the softness
            of every cushion.
          </p>

          <Link to="/sofa#top" className="sofa-explore-btn">
  <span>Explore the collection</span>
  <span className="sofa-explore-arrow">
    <ArrowUpRight size={18} />
  </span>
</Link>

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="sofa-cta">

        <span>FIND YOUR COMFORT</span>

        <h2>
          Your favourite seat
          <br />
          <i>is waiting.</i>
        </h2>

        <p>
          Explore our complete collection and discover
          the sofa made for your space.
        </p>

      </section>

    </div>
  );
}

export default Sofa;