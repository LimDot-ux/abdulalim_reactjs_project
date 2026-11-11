
import "./Footer.css";

function Footer({ title, email, phone }) {
  return (
    <footer className="footer">
      <h2>{title}</h2>

      <p>Delicious meals, delivered with love.</p>

      <p>Email: {email}</p>
      <p>Phone: {phone}</p>

      <p className="copyright">
        © 2026 {title}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
