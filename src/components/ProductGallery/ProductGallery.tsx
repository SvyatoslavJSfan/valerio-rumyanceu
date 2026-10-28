
'use client';

import { useState } from 'react';

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = images[activeIndex];

  function showPrevious() {
    setActiveIndex((index) =>
      (index - 1 + images.length) % images.length
    );
  }

  function showNext() {
    setActiveIndex((index) =>
      (index + 1) % images.length
    );
  }

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <img
          src={currentImage}
          alt={`${title} — фото ${activeIndex + 1}`}
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={showPrevious}
              aria-label="Предыдущее фото"
            >
              ‹
            </button>

            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={showNext}
              aria-label="Следующее фото"
            >
              ›
            </button>

            <span className="gallery-counter">
              {activeIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`gallery-thumbnail ${
                index === activeIndex ? 'active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Показать фото ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
