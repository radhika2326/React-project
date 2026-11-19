import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { reviews } from "../data/reviews";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <SectionHeading eyebrow="TESTIMONIALS" title="What Our Clients Say" />

      <div className="testimonials__grid">
        {reviews.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
