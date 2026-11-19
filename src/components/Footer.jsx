import { footerLinks } from "../data/navLinks";
import { kitchenDesigns } from "../data/designs";
import { socialLinks } from "../data/socialLinks";
import { siteConfig } from "../data/siteConfig";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-mark">M</span>
              <span>MOCO</span>
            </a>

            <p>
              Premium modular kitchens designed for modern Indian homes. Smart,
              stylish, and built to last.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3>Quick Links</h3>

            <ul>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kitchen Types */}
          <div className="footer__column">
            <h3>Kitchen Types</h3>

            <ul>
              {kitchenDesigns.map((kitchen) => (
                <li key={kitchen.id}>
                  <a href="#designs">{kitchen.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer__column">
            <h3>Follow Us</h3>

            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
