// Shared wrapper for our hand-drawn icons: every icon has the same SVG
// settings, only the <path> shapes (children) change.
function SvgIcon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default SvgIcon;
