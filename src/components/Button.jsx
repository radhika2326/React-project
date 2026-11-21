import "./Button.css";

// variant: "primary" | "outline" | "light"   (colour style)
// size:    "sm" | "lg" | "xl"                (how big)
// children: the text written between <Button> and </Button>
// With an href it is a link (<a>). Without one it is a real <button>
// that runs onClick, for actions like "Load More".
function Button({
  href,
  variant = "primary",
  size = "lg",
  onClick,
  disabled,
  children,
}) {
  const className = `btn btn--${variant} btn--${size}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
