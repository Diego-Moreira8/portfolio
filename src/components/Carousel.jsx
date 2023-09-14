import { styled } from "styled-components";
import Project from "./Project";
import { useState } from "react";

const StyledCarousel = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  margin: 1rem auto;

  .prev-btn {
    border-right: none;
  }

  .next-btn {
    border-left: none;
  }
`;

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else {
      setCurrentSlide(projects.length - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  // Only for tests
  const projects = [
    <Project
      title={"Projeto 1"}
      src={
        "https://images.unsplash.com/photo-1694607995695-1af169bd5a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
      }
      alt={"Texto alternativo de teste"}
      description={
        "Descrição do projeto aqui. Asd ef wef we wie weir naioudhasd asd asudasdo. "
      }
      repoUrl={"#"}
      projectUrl={"#"}
    />,
    <Project
      title={"Projeto 2"}
      src={
        "https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
      alt={"Texto alternativo de teste"}
      description={
        "Descrição do projeto aqui. Asd ef wef we wie weir naioudhasd asd asudasdo. "
      }
      repoUrl={"#"}
      projectUrl={"#"}
    />,
    <Project
      title={"Projeto 3"}
      src={
        "https://images.unsplash.com/photo-1683009427470-a36fee396389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      }
      alt={"Texto alternativo de teste"}
      description={
        "Descrição do projeto aqui. Asd ef wef we wie weir naioudhasd asd asudasdo. "
      }
      repoUrl={"#"}
      projectUrl={"#"}
    />,
  ];

  return (
    <StyledCarousel>
      <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      {projects[currentSlide]}
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </StyledCarousel>
  );
}
