import "./Navbar.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo/final-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="brand">
          <img
            src={logo}
            alt="Rahul Raj Sah Logo"
            className="brand-logo"
          />

          <div>
            <h2>Rahul Raj Sah</h2>
          </div>
        </a>

        <nav className={open ? "nav open" : "nav"}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;