import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/processSteps";
import "./Process.css";

function Process() {
  return (
    <section className="process" id="process">
      <SectionHeading eyebrow="OUR PROCESS" title="From Vision to Reality" />

      <div className="process__steps">
        {processSteps.map((step) => (
          <div className="process__step" key={step.title}>
            <div className="process__icon">
              <FontAwesomeIcon icon={step.icon} />
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
