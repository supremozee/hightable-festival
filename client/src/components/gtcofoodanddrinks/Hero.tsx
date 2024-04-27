import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  margin: 20px;
  width: 100%;
  height: 162px;
  background-image: url(${({ bg }: {bg:any}) => bg || '/images/event_slide1.svg'});
  // background-repeat: no-repeat;
  background-position:center;
  object-fit: cover;
  transition: 1s ease-in;
`;

const HeroBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
//   gap: 10px;
  height: 100%;

  & p {
    max-width: 171px;
    color: #edf0fa;
    font-weight: 700;
    font-size: 15px;
    font-family: Open-Sans;
    text-align: center;
  }
`;

const DotIndicator = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  width: full;
  justify-content: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }: {isActive: any}) => (isActive ? '#FF9916' : '#cccccc')};
`;

const HeroSection = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HeroSlide.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroWrapper bg={HeroSlide[currentHeroSlide].image}>
      <HeroBody>
        <p>{HeroSlide[currentHeroSlide].description}</p>
        <DotIndicator>
        {HeroSlide.map((slide, index) => (
          <Dot key={index} isActive={index === currentHeroSlide} />
        ))}
      </DotIndicator>
      </HeroBody>
    </HeroWrapper>
  );
};

export default HeroSection;

const HeroSlide = [
  {
    image: "/images/gtco1.svg",
    description: "Taste the Best of Africa! HighTable x GTco Food & Drink Fest",
  },
  {
    image: "/images/gtco2.svg",
    description: "Your Food Adventure Starts Here!",
  },
  {
    image: "/images/gtco3.svg",
    description: "Hidden Gems Await...",
  },
  {
    image: "/images/gtco4.svg",
    description: "Your Review Matters! Shape the Festival Experience",
  },
  {
    image: "/images/gtco2.svg",
    description: "Your Food Adventure Starts Here!",
  },
];
