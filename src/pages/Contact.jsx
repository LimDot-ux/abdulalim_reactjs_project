
import ContactForm from "../components/ContactForm";
import "./Contact.css";

function Contact({ email, phone }) {
  return (
    <section className="contact-page">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: Ado-Ekiti, Ekiti State, Nigeria</p>

          <p>
            Have questions, complaints or suggestions?
            Send us a message.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
