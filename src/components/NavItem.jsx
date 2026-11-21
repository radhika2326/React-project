function NavItem({ label, href, onClick }) {
  return (
    <li>
      <a href={href} className="nav__link" onClick={onClick}>
        {label}
      </a>
    </li>
  );
}

export default NavItem;
