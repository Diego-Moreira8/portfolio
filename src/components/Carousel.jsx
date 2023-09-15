import { styled } from "styled-components";
import { useState } from "react";

const StyledCarousel = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  margin: 0 auto;

  .prev-btn {
    border-right: none;
  }

  .next-btn {
    border-left: none;
  }
`;

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide(slides.length - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <StyledCarousel>
      <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      {slides[currentSlide]}
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </StyledCarousel>
  );
}
