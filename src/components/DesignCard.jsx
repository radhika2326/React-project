function DesignCard({ name, description, image }) {
  return (
    <article className="designs__card">
      <div className="designs__media">
        <img src={image} alt={name} loading="lazy" />

        <div className="designs__overlay"></div>
      </div>

      <div className="designs__body">
        <h3 className="designs__card-title">{name}</h3>

        <p className="designs__card-text">{description}</p>
      </div>
    </article>
  );
}

export default DesignCard;
