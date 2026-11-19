import SectionHeading from "./SectionHeading";
import DesignCard from "./DesignCard";
import { kitchenDesigns } from "../data/designs";
import "./Design.css";

function Designs() {
  return (
    <section className="designs" id="designs">
      <div className="designs__container">
        <SectionHeading
          eyebrow="OUR DESIGNS"
          title="Modular Kitchen Categories"
        />

        <div className="designs__grid">
          {kitchenDesigns.map((kitchen) => (
            <DesignCard key={kitchen.id} {...kitchen} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Designs;
