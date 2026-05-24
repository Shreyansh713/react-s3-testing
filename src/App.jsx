import { Mail, MapPin, Menu, Phone, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>
          ReactSite
        </NavLink>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 ReactSite. All rights reserved.</p>
      <p>Built with React, Vite, and React Router.</p>
    </footer>
  );
}

function Layout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">Modern React Website</span>
        <h1>Fast, clean, and ready for routing.</h1>
        <p>
          This Vite React website includes Home, About, Contact pages,
          navbar, footer, and React Router navigation.
        </p>

        <div className="hero-actions">
          <NavLink to="/about" className="primary-button">
            Learn More
          </NavLink>
          <NavLink to="/contact" className="secondary-button">
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="hero-panel">
        <div>
          <strong>Vite</strong>
          <span>Fast React setup</span>
        </div>
        <div>
          <strong>Router</strong>
          <span>Multi-page navigation</span>
        </div>
        <div>
          <strong>Responsive</strong>
          <span>Mobile friendly design</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">About</span>
        <h1>We build simple digital experiences.</h1>
      </div>

      <div className="content-grid">
        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            Create websites that are fast, clear, and easy to use.
          </p>
        </div>

        <div className="info-card">
          <h2>Our Approach</h2>
          <p>
            We use reusable components and clean page structure.
          </p>
        </div>

        <div className="info-card">
          <h2>Technology</h2>
          <p>
            This project uses React, Vite, and React Router.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h1>Get in touch with us.</h1>
      </div>

      <div className="contact-layout">
        <div className="contact-list">
          <div className="contact-item">
            <Mail size={22} />
            <span>hello@reactsite.com</span>
          </div>

          <div className="contact-item">
            <Phone size={22} />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <MapPin size={22} />
            <span>India</span>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Enter your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Write your message" />
          </label>

          <button className="primary-button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

Layout.Home = Home;
Layout.About = About;
Layout.Contact = Contact;

export default Layout;