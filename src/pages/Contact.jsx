import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Contact.css";

const faqs = [
  {
    question: "Do you offer custom furniture?",
    answer:
      "Yes. We can work with you on selected custom furniture pieces, including dimensions, materials and finishes.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most ready-to-ship pieces are delivered within 2–4 weeks. Custom pieces may require additional production time.",
  },
  {
    question: "Can I visit the LumaNest showroom?",
    answer:
      "Absolutely. Our showroom is designed to let you experience our furniture, materials and finishes in person.",
  },
  {
    question: "Do you offer interior design assistance?",
    answer:
      "Yes. Our team can help you select furniture and coordinate pieces to create a cohesive interior.",
  },
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-image"></div>
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            LET'S CREATE SOMETHING BEAUTIFUL
          </span>

          <h1>
            Start a
            <br />
            <em>conversation.</em>
          </h1>

          <p>
            Whether you are furnishing one room or creating
            an entire home, we would love to hear what you
            have in mind.
          </p>

          <a href="#contact-form" className="contact-hero-btn">
            <span>Get in touch</span>

            <span className="contact-hero-arrow">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>

        <div className="contact-hero-bottom">
          <span>07 / 07</span>
          <span>LUMANEST FURNITURE</span>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="contact-intro">

        <div className="contact-intro-label">
          <span>01</span>
          <p>WE'D LOVE TO HEAR FROM YOU</p>
        </div>

        <div className="contact-intro-content">
          <h2>
            Good spaces begin
            <br />
            with <em>good conversations.</em>
          </h2>

          <p>
            Tell us a little about your project, your space or
            simply the piece you have been looking for. Our team
            will get back to you with thoughtful recommendations.
          </p>
        </div>

      </section>


      {/* =====================================================
          SHOWROOM DETAILS
      ===================================================== */}

      <section className="contact-details-section">

        <div className="contact-details-image">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
            alt="LumaNest interior"
          />

          <div className="contact-image-caption">
            <span>COME SAY HELLO</span>
            <strong>OUR SHOWROOM</strong>
          </div>

        </div>


        <div className="contact-details-content">

          <span className="section-label">
            FIND US
          </span>

          <h2>
            Come and
            <br />
            <em>see for yourself.</em>
          </h2>

          <p>
            Experience our furniture, fabrics and finishes in
            person at the LumaNest showroom.
          </p>


          <div className="contact-info-list">

            <div className="contact-info-item">

              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>SHOWROOM</span>

                <p>
                  24 Oak Street,
                  <br />
                  Design District,
                  <br />
                  Coimbatore, Tamil Nadu
                </p>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>PHONE</span>
                <p>+91 98765 43210</p>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>EMAIL</span>
                <p>hello@lumanest.com</p>
              </div>

            </div>

          </div>


          <div className="contact-opening-hours">

            <span>OPENING HOURS</span>

            <div>
              <p>Monday — Saturday</p>
              <strong>10:00 AM — 7:00 PM</strong>
            </div>

            <div>
              <p>Sunday</p>
              <strong>11:00 AM — 5:00 PM</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION MAP
      ===================================================== */}

      <section className="contact-map-section">

        <div className="contact-map-heading">

          <div>
            <span className="section-label">
              OUR LOCATION
            </span>

            <h2>
              Come find
              <br />
              <em>your way to us.</em>
            </h2>
          </div>

          <p>
            Visit the LumaNest showroom and experience our
            furniture, textures and materials in person.
          </p>

        </div>


        <div className="contact-map-wrapper">

          <iframe
            title="LumaNest showroom location"
            src="https://www.google.com/maps?q=Coimbatore,Tamil+Nadu,India&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contact-map-card">

            <div className="map-card-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>LUMANEST SHOWROOM</span>

              <h3>Coimbatore, Tamil Nadu</h3>

              <p>
                24 Oak Street, Design District
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section
        className="contact-form-section"
        id="contact-form"
      >

        <div className="contact-form-heading">

          <span className="section-label">
            SEND AN ENQUIRY
          </span>

          <h2>
            Tell us about
            <br />
            <em>your space.</em>
          </h2>

          <p>
            Share a few details about your project and our
            team will be in touch with thoughtful ideas.
          </p>

          <div className="form-note">
            <span>01</span>

            <p>
              We usually respond within
              <strong> 1–2 business days.</strong>
            </p>
          </div>

        </div>


        <div className="contact-form-wrapper">

          {submitted ? (

            <div className="contact-success">

              <div className="success-icon">
                <Check size={25} />
              </div>

              <span>THANK YOU</span>

              <h3>
                Your message
                <br />
                has been received.
              </h3>

              <p>
                Our team will get back to you shortly.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="contact-reset-btn"
              >
                Send another message
              </button>

            </div>

          ) : (

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + EMAIL */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <div className="input-wrap">

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <div className="input-wrap">

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />

                  </div>

                </div>

              </div>


              {/* PHONE + PROJECT */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <div className="input-wrap phone-input">

                    <span>+91</span>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="project">
                    PROJECT TYPE
                  </label>

                  <div className="select-wrap">

                    <select
                      id="project"
                      defaultValue=""
                      required
                    >

                      <option value="" disabled>
                        Select project type
                      </option>

                      <option value="new-home">
                        New Home
                      </option>

                      <option value="room-makeover">
                        Room Makeover
                      </option>

                      <option value="custom-furniture">
                        Custom Furniture
                      </option>

                      <option value="interior-design">
                        Interior Design
                      </option>

                      <option value="general-enquiry">
                        General Enquiry
                      </option>

                    </select>

                    <ChevronDown size={18} />

                  </div>

                </div>

              </div>


              {/* BUDGET */}

              <div className="form-group">

                <label htmlFor="budget">
                  ESTIMATED BUDGET
                </label>

                <div className="select-wrap">

                  <select
                    id="budget"
                    defaultValue=""
                  >

                    <option value="" disabled>
                      Select a range
                    </option>

                    <option value="under-50000">
                      Under ₹50,000
                    </option>

                    <option value="50000-100000">
                      ₹50,000 — ₹1,00,000
                    </option>

                    <option value="100000-300000">
                      ₹1,00,000 — ₹3,00,000
                    </option>

                    <option value="300000-plus">
                      ₹3,00,000+
                    </option>

                  </select>

                  <ChevronDown size={18} />

                </div>

              </div>


              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  TELL US MORE
                </label>

                <div className="textarea-wrap">

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us about your space, what you're looking for, or how we can help..."
                    required
                  ></textarea>

                </div>

              </div>


              {/* SUBMIT */}

              <div className="form-submit-area">

                <p>
                  By submitting this form, you agree to be
                  contacted by the LumaNest team.
                </p>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >

                  <span>Send enquiry</span>

                  <span className="contact-submit-arrow">
                    <ArrowUpRight size={18} />
                  </span>

                </button>

              </div>

            </form>

          )}

        </div>

      </section>


      {/* =====================================================
          SOCIAL
      ===================================================== */}

      <section className="contact-social">

        <div className="contact-social-content">

          <span className="section-label">
            FOLLOW ALONG
          </span>

          <h2>
            Life at
            <br />
            <em>LumaNest.</em>
          </h2>

          <p>
            Follow our latest spaces, collections and design
            inspiration.
          </p>


          <div className="social-links">

            {/* FACEBOOK */}

            <a href="#facebook" aria-label="Facebook">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>

            </a>


            {/* INSTAGRAM */}

            <a href="#instagram" aria-label="Instagram">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-2.388-.046-3.231s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>

            </a>


            {/* TWITTER */}

            <a href="#twitter" aria-label="Twitter">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>

            </a>

          </div>

        </div>


        <div className="contact-social-image">

          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
            alt="LumaNest interior inspiration"
          />

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="contact-faq">

        <div className="contact-faq-heading">

          <span className="section-label">
            QUESTIONS
          </span>

          <h2>
            Before we
            <br />
            <em>get started.</em>
          </h2>

        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openFaq === index ? "open" : ""
              }`}
              key={faq.question}
            >

              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >

                <span>
                  {faq.question}
                </span>

                <span className="faq-question-icon">
                  <ChevronDown size={18} />
                </span>

              </button>


              <div className="faq-answer">

                <p>
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final-cta">

        <div className="contact-final-content">

          <span>
            YOUR HOME, YOUR STORY
          </span>

          <h2>
            Let's make
            <br />
            <em>something lasting.</em>
          </h2>

          <a
            href="#contact-form"
            className="contact-final-btn"
          >

            <span>Start your project</span>

            <span className="contact-final-arrow">
              <ArrowUpRight size={18} />
            </span>

          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;