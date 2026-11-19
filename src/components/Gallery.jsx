import SectionHeading from "./SectionHeading";
import { galleryImages } from "../data/galleryImages";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <SectionHeading eyebrow="GALLERY" title="Featured Projects" />

      <div className="gallery__grid">
        {galleryImages.map((item, index) => (
          <div
            className={`gallery__item gallery__item--${index + 1}`}
            key={item.title}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
