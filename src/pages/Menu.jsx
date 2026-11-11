
import FoodCard from "../components/FoodCard";
import "./Menu.css";

function Menu({ foods, onAddToCart }) {
  return (
    <section className="menu-page">
      <h1>Our Food Menu</h1>
      <p>Choose your favourite meal and add it to your cart.</p>

      <div className="menu-grid">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
