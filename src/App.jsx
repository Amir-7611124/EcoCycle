import { useState } from "react";
import "./App.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "how-it-works", label: "How It Works" },
  { id: "request", label: "Request Pickup" },
  { id: "about", label: "About Us" },
];

const STEPS = [
  {
    icon: "📦",
    title: "Electronic Waste Collection",
    description:
      "We collect electronic waste from homes and institutions in a safe and organized manner",
  },
  {
    icon: "🔍",
    title: "Device Sorting",
    description:
      "We sort devices to identify reusable items and recyclable materials",
  },
  {
    icon: "♻️",
    title: "Safe Recycling",
    description:
      "We recycle electronic materials in a safe and environmentally friendly way",
  },
  {
    icon: "🌍",
    title: "Environmental Awareness",
    description:
      "We contribute to spreading environmental awareness about the importance of recycling and waste reduction",
  },
];

const STATS = [
  { number: "1000+", label: "Devices Collected" },
  { number: "500+", label: "Satisfied Customers" },
  { number: "50+", label: "Partner Organizations" },
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    deviceType: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! We will contact you soon to arrange electronic waste collection."
    );
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      deviceType: "",
      quantity: "",
      message: "",
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="logo" onClick={() => scrollToSection("home")}>
            <span className="logo-icon">♻️</span>
            <span className="logo-text">EcoCycle Egypt</span>
          </div>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              EcoCycle Egypt
              <span className="subtitle">Electronic Waste Recycling</span>
            </h1>
            <p className="hero-description">
              An environmental project aimed at recycling electronic waste such
              as old computers and mobile phones, with the goal of reducing
              pollution and protecting the environment in Egypt, contributing to
              building a more sustainable future.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("request")}
              >
                Request Waste Pickup
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection("how-it-works")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How the Project Works</h2>
          <div className="steps-grid">
            {STEPS.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="request-section">
        <div className="container">
          <h2 className="section-title">Request Electronic Waste Collection</h2>
          <p className="section-subtitle">
            Fill out the form below and we will contact you as soon as possible
            to arrange the collection
          </p>
          <form className="request-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="01xxxxxxxxx"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="deviceType">Device Type *</label>
                <select
                  id="deviceType"
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select device type</option>
                  <option value="computer">Desktop Computers</option>
                  <option value="laptop">Laptops</option>
                  <option value="mobile">Mobile Phones</option>
                  <option value="tablet">Tablets</option>
                  <option value="monitor">Monitors</option>
                  <option value="printer">Printers</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="quantity">Quantity *</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="Number of devices"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Full Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Governorate, City, District, Street"
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any additional information that might help us..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-large">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Vision</h3>
              <p>
                We are EcoCycle Egypt, an environmental project specialized in
                recycling electronic waste in Egypt. We strive to build a more
                sustainable future by reducing pollution and protecting the
                environment.
              </p>
              <h3>Our Mission</h3>
              <ul className="mission-list">
                <li>✅ Collect electronic waste from homes and institutions</li>
                <li>✅ Sort devices to identify reusable items</li>
                <li>✅ Recycle electronic materials safely</li>
                <li>
                  ✅ Spread environmental awareness about the importance of
                  recycling
                </li>
                <li>✅ Reduce waste and protect natural resources</li>
              </ul>
              <h3>Our Goals</h3>
              <p>
                We aim to contribute to protecting the Egyptian environment by
                reducing electronic waste, recycling reusable materials, and
                spreading environmental culture in Egyptian society.
              </p>
            </div>
        
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">♻️</span>
                <span className="logo-text">EcoCycle Egypt</span>
              </div>
              <p>
                An environmental project for recycling electronic waste in Egypt
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul>
                <li>📞 +20 101 020 8264</li>
                <li>📧 EcoCycleEgypt@gmail.com</li>
                <li>📍 Alexandria, Egypt</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 EcoCycle Egypt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
