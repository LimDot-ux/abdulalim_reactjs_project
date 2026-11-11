
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({ heading, description, image }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{heading}</h1>
        <p>{description}</p>

        <Link to="/menu" className="hero-button">
          Explore Our Menu
        </Link>
      </div>

      <div className="hero-image">
        <img src={image} alt="Delicious restaurant food" />
      </div>
    </section>
  );
}

export default Hero;
