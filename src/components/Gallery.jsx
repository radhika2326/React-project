import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import "./Gallery.css";

// Free image API, no key needed: https://picsum.photos
const API_URL = "https://picsum.photos/v2/list";
const IMAGES_PER_PAGE = 4; // the gallery layout is built for 4 images

// 4 empty slots shown while a page is loading, so the section keeps its height
const placeholders = Array.from({ length: IMAGES_PER_PAGE }, (_, i) => ({
  id: `placeholder-${i}`,
}));

// Asks the API for one page of photos and returns them in the shape we need
async function fetchGalleryPage(page, signal) {
  const response = await fetch(
    `${API_URL}?page=${page}&limit=${IMAGES_PER_PAGE}`,
    { signal },
  );

  if (!response.ok) throw new Error("Request failed");

  const photos = await response.json();

  return photos.map((photo) => ({
    id: photo.id,
    title: `Photo by ${photo.author}`,
    image: `https://picsum.photos/id/${photo.id}/800/600`,
  }));
}

function Gallery() {
  const [page, setPage] = useState(1); // which page the user is looking at
  const [pages, setPages] = useState({}); // loaded pages: { 1: [...], 2: [...] }
  const [lastPage, setLastPage] = useState(null); // known only once the API runs out
  const [failedPage, setFailedPage] = useState(null); // the page that failed to load
  const [retryCount, setRetryCount] = useState(0); // changing it re-runs the fetch

  // Runs on first render and whenever the page (or a retry) changes
  useEffect(() => {
    // this page is already loaded, nothing to fetch
    if (pages[page]) return;

    const controller = new AbortController();
    setFailedPage(null);

    fetchGalleryPage(page, controller.signal)
      .then((images) => {
        setPages((oldPages) => ({ ...oldPages, [page]: images }));

        // fewer images than a full page means there is no next page
        if (images.length < IMAGES_PER_PAGE) setLastPage(page);
      })
      .catch((error) => {
        // an abort is us cancelling on purpose, not a real failure
        if (error.name !== "AbortError") setFailedPage(page);
      });

    // Cleanup: cancel the request if the user moves on or the effect re-runs
    return () => controller.abort();
  }, [page, pages, retryCount]);

  const currentImages = pages[page]; // undefined while that page is loading
  const hasError = failedPage === page;
  const isLoading = !currentImages && !hasError;
  const hasNextPage = lastPage === null || page < lastPage;

  return (
    <section className="gallery" id="gallery">
      <SectionHeading eyebrow="GALLERY" title="Featured Projects" />

      <div className="gallery__grid">
        {(currentImages || placeholders).map((item, index) => (
          <div
            className={`gallery__item gallery__item--${index + 1} ${
              currentImages ? "" : "gallery__item--loading"
            }`}
            key={item.id}
          >
            {currentImages && (
              <img src={item.image} alt={item.title} loading="lazy" />
            )}
          </div>
        ))}
      </div>

      {/* always rendered so the section height never changes */}
      <p className="gallery__error">
        {hasError && "Could not load images. Please try again."}
      </p>

      <div className="gallery__more">
        {page > 2 && (
          <Button variant="ghost" size="sm" onClick={() => setPage(1)}>
            Back to First
          </Button>
        )}

        <Button
          variant="ghost"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((current) => current - 1)}
        >
          Previous
        </Button>

        <span className="gallery__page">Page {page}</span>

        {hasError ? (
          <Button size="sm" onClick={() => setRetryCount((count) => count + 1)}>
            Try Again
          </Button>
        ) : (
          <Button
            size="sm"
            disabled={isLoading || !hasNextPage}
            onClick={() => setPage((current) => current + 1)}
          >
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        )}
      </div>
    </section>
  );
}

export default Gallery;
