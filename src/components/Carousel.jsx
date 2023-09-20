import { styled } from "styled-components";
import { useState } from "react";

const StyledCarousel = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  margin: auto;
  max-width: 600px;
`;

const NavigationButton = styled.button`
  &.prev-btn {
    border-right: none;
  }

  &.next-btn {
    border-left: none;
  }
`;

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
    else setCurrentSlide(slides.length - 1);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide((prev) => prev + 1);
    else setCurrentSlide(0);
  };

  return (
    <StyledCarousel>
      <NavigationButton
        aria-label="projeto anterior"
        className="prev-btn"
        onClick={prevSlide}
      >
        &lt;
      </NavigationButton>
      {slides[currentSlide]}
      <NavigationButton
        aria-label="próximo projeto"
        className="next-btn"
        onClick={nextSlide}
      >
        &gt;
      </NavigationButton>
    </StyledCarousel>
  );
}
