import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

import {
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";

import "./Cart.css";

function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 50000 ? 0 : 1500;

  const total = subtotal + shipping;

  return (
    <div className="cart-page">

      {/* HERO */}

      <section className="cart-hero">

        <p className="cart-eyebrow">
          YOUR SELECTION
        </p>

        <h1>
          Your <em>Cart</em>
        </h1>

        <p>
          Review your selected pieces and create
          your perfect space.
        </p>

      </section>


      {/* CART */}

      <section className="cart-section">

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-cart-icon">
              <ShoppingBag size={42} strokeWidth={1.2} />
            </div>

            <h2>
              Your cart is empty
            </h2>

            <p>
              Looks like you haven't added anything
              to your cart yet.
            </p>

            <Link
              to="/sofa"
              className="continue-shopping"
            >
              Explore Collection
            </Link>

          </div>

        ) : (

          <div className="cart-layout">

            {/* LEFT */}

            <div className="cart-products">

              <div className="cart-heading">

                <div>
                  <p className="small-label">
                    CART
                  </p>

                  <h2>
                    Selected pieces
                  </h2>
                </div>

                <span>
                  {totalQuantity}{" "}
                  {totalQuantity === 1
                    ? "item"
                    : "items"}
                </span>

              </div>


              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* IMAGE */}

                  <div className="cart-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="cart-details">

                    <p className="cart-category">
                      {item.category || "Furniture"}
                    </p>

                    <h3>
                      {item.name}
                    </h3>

                    <p className="cart-price">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>


                    <div className="cart-controls">

                      <div className="quantity-control">

                        <button
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={15} />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={15} />
                        </button>

                      </div>


                      <button
                        className="remove-button"
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>

                    </div>

                  </div>


                  {/* ITEM TOTAL */}

                  <div className="item-total">

                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString("en-IN")}

                  </div>

                </div>

              ))}


              <div className="cart-bottom-actions">

                <Link
                  to="/sofa"
                  className="back-shopping"
                >
                  <ArrowLeft size={17} />
                  Continue Shopping
                </Link>

                <button
                  className="clear-cart"
                  onClick={() =>
                    dispatch(clearCart())
                  }
                >
                  Clear Cart
                </button>

              </div>

            </div>


            {/* RIGHT */}

            <aside className="cart-summary">

              <p className="small-label">
                ORDER SUMMARY
              </p>

              <h2>
                Your total
              </h2>


              <div className="summary-line">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{subtotal.toLocaleString("en-IN")}
                </strong>

              </div>


              <div className="summary-line">

                <span>
                  Shipping
                </span>

                <strong>

                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping.toLocaleString(
                        "en-IN"
                      )}`}

                </strong>

              </div>


              <div className="summary-divider" />


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{total.toLocaleString("en-IN")}
                </strong>

              </div>


              <p className="shipping-note">

                {shipping === 0
                  ? "You qualify for free delivery."
                  : "Free delivery on orders above ₹50,000."}

              </p>


              <button className="checkout-button">
                Proceed to Checkout
              </button>


              <div className="secure-note">
                Secure checkout · Easy returns
              </div>

            </aside>

          </div>

        )}

      </section>

    </div>
  );
}

export default Cart;