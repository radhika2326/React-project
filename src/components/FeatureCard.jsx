function FeatureCard({ icon, title, description }) {
  return (
    <div className="why__card">
      <div className="why__icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
