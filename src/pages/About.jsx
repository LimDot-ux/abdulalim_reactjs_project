
import "./About.css";

function About({ title, description }) {
  return (
    <section className="about-page">
      <div className="about-content">
        <h1>About {title}</h1>

        <p>{description}</p>

        <h2>Our Mission</h2>
        <p>
          To provide delicious, affordable and quality meals
          while giving our customers an excellent food
          ordering experience.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become a trusted food delivery brand known for
          quality, convenience and customer satisfaction.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Freshly prepared meals</li>
          <li>Affordable prices</li>
          <li>Fast and convenient ordering</li>
          <li>Excellent customer service</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
