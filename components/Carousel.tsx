// /components/Carousel.tsx
import { useState } from 'react';
import Image from 'next/image';

const Carousel = ({ images }: { images: Array<{ src: string, alt: string }> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button onClick={handlePrev} className="absolute left-0 z-10">
          Prev
        </button>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="rounded-lg"
        />
        <button onClick={handleNext} className="absolute right-0 z-10">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
