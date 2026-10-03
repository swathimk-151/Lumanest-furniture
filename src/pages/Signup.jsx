import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");


  const handleSignup = (e) => {

    e.preventDefault();

    setError("");


    if (password.length < 6) {

      setError(
        "Password must contain at least 6 characters."
      );

      return;
    }


    if (password !== confirmPassword) {

      setError(
        "Passwords do not match."
      );

      return;
    }


    const existingUser =
      JSON.parse(localStorage.getItem("lumanestUser"));


    if (existingUser) {

      setError(
        "An account already exists. Please login."
      );

      return;
    }


    const user = {
      name,
      email,
      password
    };


    localStorage.setItem(
      "lumanestUser",
      JSON.stringify(user)
    );


    navigate("/login");

  };


  return (

    <section className="auth-page signup-page">

      <div className="auth-container">


        {/* IMAGE */}

        <div className="auth-image signup-image">

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="LumaNest furniture"
          />

          <div className="auth-image-overlay">

            <p>WELCOME TO LUMANEST</p>

            <h2>
              Create a home
              <br />
              you love.
            </h2>

          </div>

        </div>


        {/* FORM */}

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
                CREATE ACCOUNT
              </p>

              <h1>
                Join our
                <br />
                <em>community.</em>
              </h1>

              <p>
                Create an account to save your
                favorite pieces and manage your orders.
              </p>

            </div>


            <form
              className="auth-form"
              onSubmit={handleSignup}
            >


              {/* NAME */}

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>


              {/* EMAIL */}

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


              {/* PASSWORD */}

              <div className="form-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="form-group">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
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
                Create Account
              </button>


            </form>


            <div className="auth-divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>


            <p className="auth-switch">

              Already have an account?

              <Link to="/login">
                Sign In
              </Link>

            </p>


          </div>

        </div>

      </div>

    </section>

  );
}

export default Signup;