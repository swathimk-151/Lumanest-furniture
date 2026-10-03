import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">

        <div className="hero-content">

          <span className="hero-tag">
            TIMELESS FURNITURE · MODERN LIVING
          </span>

          <h1>
            Spaces that
            <br />
            <i>feel like home.</i>
          </h1>

          <p>
            Thoughtfully designed furniture made to bring
            warmth, comfort and character to your everyday life.
          </p>

          <div className="hero-buttons">
            <Link to="/sofa" className="primary-btn">
              Explore Collection
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="secondary-btn">
              Our Story
            </Link>
          </div>

        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>

      </section>


      {/* ================= MARQUEE ================= */}
      <section className="home-marquee">

        <div className="marquee-track">
          <span>CRAFTED WITH PURPOSE</span>
          <b>✦</b>
          <span>DESIGNED FOR LIVING</span>
          <b>✦</b>
          <span>TIMELESS COMFORT</span>
          <b>✦</b>
          <span>CRAFTED WITH PURPOSE</span>
          <b>✦</b>
          <span>DESIGNED FOR LIVING</span>
          <b>✦</b>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="home-intro">

        <div className="intro-label">
          <span>01</span>
          <span>THE LUMANEST WAY</span>
        </div>

        <div className="intro-content">

          <h2>
            Furniture should be
            <i> more than beautiful.</i>
          </h2>

          <p>
            It should make you want to stay a little longer.
            At LumaNest, we combine thoughtful design,
            natural materials and everyday comfort to create
            pieces that belong in your life.
          </p>

          <Link to="/about" className="text-link">
            Discover LumaNest
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>


      {/* ================= COLLECTIONS ================= */}
      <section className="collections-section">

        <div className="section-heading">

          <div>
            <span>CURATED COLLECTIONS</span>

            <h2>
              Find your
              <i> perfect piece.</i>
            </h2>
          </div>

          <p>
            Explore our collection of carefully designed
            furniture for every corner of your home.
          </p>

        </div>


        <div className="collection-grid">

          {/* SOFA */}
          <Link to="/sofa" className="collection-card large">

            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85"
              alt="Modern sofa"
            />

            <div className="collection-overlay">
              <div>
                <span>01</span>
                <h3>Sofas</h3>
              </div>

              <div className="collection-arrow">
                <ArrowUpRight />
              </div>
            </div>

          </Link>


          {/* CHAIRS */}
          <Link to="/chairs" className="collection-card">

            <img
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=85"
              alt="Designer chair"
            />

            <div className="collection-overlay">
              <div>
                <span>02</span>
                <h3>Chairs</h3>
              </div>

              <div className="collection-arrow">
                <ArrowUpRight />
              </div>
            </div>

          </Link>


          {/* DINING */}
          <Link to="/dining" className="collection-card">

            <img
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85"
              alt="Dining table"
            />

            <div className="collection-overlay">
              <div>
                <span>03</span>
                <h3>Dining</h3>
              </div>

              <div className="collection-arrow">
                <ArrowUpRight />
              </div>
            </div>

          </Link>


          {/* BEDROOM */}
          <Link to="/bedroom" className="collection-card wide">

            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
              alt="Modern bedroom"
            />

            <div className="collection-overlay">
              <div>
                <span>04</span>
                <h3>Bedroom</h3>
              </div>

              <div className="collection-arrow">
                <ArrowUpRight />
              </div>
            </div>

          </Link>

        </div>

      </section>


      {/* ================= FEATURE ================= */}
      <section className="feature-section">

        <div className="feature-image">

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="LumaNest interior"
          />

          <div className="play-button">
            <Play size={20} fill="currentColor" />
          </div>

        </div>


        <div className="feature-content">

          <span>DESIGN PHILOSOPHY</span>

          <h2>
            Quiet design.
            <br />
            <i>Beautiful living.</i>
          </h2>

          <p>
            We believe the best interiors don't need to
            shout. They speak through natural textures,
            considered details and pieces that feel right
            the moment you sit down.
          </p>

          <Link to="/about" className="home-philosophy-btn">
  <span>Discover Our Philosophy</span>

  <span className="home-philosophy-arrow">
    <ArrowUpRight size={18} />
  </span>
</Link>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="products-section">

        <div className="section-heading products-heading">

          <div>
            <span>FAVOURITES</span>

            <h2>
              Made for
              <i> everyday moments.</i>
            </h2>
          </div>

          <Link to="/sofa" className="text-link">
            View all pieces
            <ArrowUpRight size={18} />
          </Link>

        </div>


        <div className="product-grid">

          <div className="product-card">

            <div className="product-image">

              <span className="product-tag">
                BESTSELLER
              </span>

              <img
                src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=85"
                alt="Luna sofa"
              />

              <button className="quick-view">
                Quick View
              </button>

            </div>

            <div className="product-info">
              <div>
                <h3>Luna Lounge Sofa</h3>
                <p>Soft linen · Natural oak</p>
              </div>

              <strong>₹48,900</strong>
            </div>

          </div>


          <div className="product-card">

            <div className="product-image">

              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85"
                alt="Accent chair"
              />

              <button className="quick-view">
                Quick View
              </button>

            </div>

            <div className="product-info">
              <div>
                <h3>Arco Lounge Chair</h3>
                <p>Bouclé · Solid wood</p>
              </div>

              <strong>₹18,500</strong>
            </div>

          </div>


          <div className="product-card">

            <div className="product-image">

              <span className="product-tag">
                NEW
              </span>

              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85"
                alt="Modern side table"
              />

              <button className="quick-view">
                Quick View
              </button>

            </div>

            <div className="product-info">
              <div>
                <h3>Forma Side Table</h3>
                <p>Travertine · Walnut</p>
              </div>

              <strong>₹12,900</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">

        <div className="cta-content">

          <span>CREATE YOUR SPACE</span>

          <h2>
            Your home should
            <br />
            <i>feel like you.</i>
          </h2>

          <p>
            Find pieces that fit your space, your style
            and the way you live.
          </p>

          <Link to="/contact" className="cta-button">
            Visit Our Studio
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;