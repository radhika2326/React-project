import "./Button.css";

function Button({ href, variant = "primary", size = "lg", onClick, children }) {
  return (
    <a
      href={href}
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Button;