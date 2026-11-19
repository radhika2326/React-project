import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestimonialCard({ review, name, city, rating = 5 }) {
  // Array.from({ length: 3 }) makes 3 empty slots, one star is drawn per slot
  const stars = Array.from({ length: rating });

  return (
    <div className="testimonial__card">
      <div className="testimonial__stars">
        {stars.map((_, index) => (
          <FontAwesomeIcon icon={faStar} key={index} />
        ))}
      </div>

      <p className="testimonial__review">"{review}"</p>

      <h3>{name}</h3>
      <span>{city}</span>
    </div>
  );
}

export default TestimonialCard;
