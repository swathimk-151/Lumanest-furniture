import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    const savedUser =
      JSON.parse(localStorage.getItem("lumanestUser"));

    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );

      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {

      localStorage.setItem(
        "lumanestLoggedIn",
        "true"
      );

      navigate("/");

    } else {

      setError(
        "Invalid email or password."
      );

    }
  };


  return (

    <section className="auth-page">

      <div className="auth-container">


        {/* LEFT SIDE */}

        <div className="auth-image">

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="LumaNest interior"
          />

          <div className="auth-image-overlay">

            <p>WELCOME BACK</p>

            <h2>
              Make your space
              <br />
              feel like home.
            </h2>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="auth-form-wrapper">

          <div className="auth-form-content">

            <Link
              to="/"
              className="auth-logo"
            >
              Luma<span>Nest</span>
            </Link>


            <div className="auth-heading">

              <p className="auth-small-title">
                WELCOME BACK
              </p>

              <h1>
                Sign in to your
                <br />
                <em>account.</em>
              </h1>

              <p>
                Access your wishlist, orders and
                personalized furniture collection.
              </p>

            </div>


            <form
              className="auth-form"
              onSubmit={handleLogin}
            >

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

              </div>


              {error && (

                <p className="auth-error">
                  {error}
                </p>

              )}


              <button
                type="submit"
                className="auth-submit"
              >
                Sign In
              </button>

            </form>


            <div className="auth-divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>


            <p className="auth-switch">

              Don't have an account?

              <Link to="/signup">
                Create Account
              </Link>

            </p>


          </div>

        </div>

      </div>

    </section>

  );
}

export default Login;