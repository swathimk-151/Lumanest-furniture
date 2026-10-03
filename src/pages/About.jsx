import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div>
          <span>OUR STORY</span>

          <h1>
            Furniture made for
            <i> living beautifully.</i>
          </h1>

          <p>
            LumaNest creates timeless furniture that
            brings warmth, comfort and character into
            everyday spaces.
          </p>
        </div>
      </section>

      <section className="about-story">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
            alt="LumaNest interior"
          />
        </div>

        <div className="about-content">
          <span>WHO WE ARE</span>

          <h2>
            Designed with purpose.
            Made to last.
          </h2>

          <p>
            We believe furniture should do more than
            fill a room. It should create an atmosphere,
            support everyday life and become part of
            your story.
          </p>

          <p>
            From carefully selected materials to
            thoughtful proportions, every LumaNest
            piece is created with comfort and
            longevity in mind.
          </p>

          <Link to="/contact" className="about-button">
            Visit Us
          </Link>
        </div>

      </section>

    </div>
  );
}

export default About;