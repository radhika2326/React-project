import Button from "./Button";
import { siteConfig } from "../data/siteConfig";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__content">
        <h2>Ready to Build Your Dream Kitchen?</h2>

        <p>
          Book a free design consultation and get a personalized 3D kitchen plan
          for your home.
        </p>

        <Button href={`mailto:${siteConfig.email}`} variant="light" size="xl">
          Book a Free Design Session
        </Button>
      </div>
    </section>
  );
}

export default CTA;
