
import "./Cart.css";

function Cart({ cartItems, onRemove, onQuantityChange }) {

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₦{item.price.toLocaleString()}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      onQuantityChange(item.id, -1)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      onQuantityChange(item.id, 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-button"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h3>
              Total: ₦{total.toLocaleString()}
            </h3>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
