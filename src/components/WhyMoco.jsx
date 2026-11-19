import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";
import { features } from "../data/features";
import "./WhyMoco.css";

function WhyMoco() {
  return (
    <section className="why" id="why">
      <div className="why__container">
        <SectionHeading
          eyebrow="WHY CHOOSE MOCO"
          title="Built Different. Built Better."
        />

        <div className="why__grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMoco;
