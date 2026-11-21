import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import { navLinks } from "../data/navLinks";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Close the mobile menu when the screen becomes desktop size
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Also check the scroll position once on page load
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`header ${isScrolled ? "header--scrolled" : ""} ${isOpen ? "header--open" : ""}`}
      id="header"
    >
      <nav className="nav container">
        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo__mark">M</span>
          <span className="logo__text">MOCO</span>
        </a>

        {/* Navigation links */}
        <ul className="nav__menu" id="navMenu">
          {navLinks.map((link) => (
            <NavItem key={link.href} {...link} onClick={closeMenu} />
          ))}

          <li className="nav__cta">
            <Button href="#contact" size="sm" onClick={closeMenu}>
              Get Quote
            </Button>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="nav__toggle"
          id="navToggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="navMenu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
