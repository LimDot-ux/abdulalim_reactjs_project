
import "./FoodCard.css";

function FoodCard({ food, onAddToCart }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-info">
        <h3>{food.name}</h3>
        <p>{food.description}</p>

        <div className="food-bottom">
          <span>₦{food.price.toLocaleString()}</span>

          <button onClick={() => onAddToCart(food)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
