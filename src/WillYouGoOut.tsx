import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    isImage?: boolean;
  }

  interface StyledImageProps {
    isAccepted?: boolean;
  }
  

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: ${(props) => (props.isImage ? '-10rem' : '4rem')};
`;

const Question = styled.h2`
  margin-bottom: 5rem;
  padding: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

interface ButtonProps {
  isyesbutton?: boolean;
  randomPosition?: boolean;
  top?: string;
  left?: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isyesbutton ? "#83c465" : "#d2554e")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 60px;
  font-size: 25px;
  margin: 0 30px;
  cursor: pointer;
  position: ${(props) => (props.randomPosition ? "absolute" : "static")};
  top: ${(props) => (props.randomPosition ? props.top : "auto")};
  left: ${(props) => (props.randomPosition ? props.left : "auto")};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 18px;
    margin: 10px;
  }
`;

const StyledImage = styled.img<StyledImageProps>`
  margin-bottom: 1px;
  width: ${(props) => (props.isAccepted ? '100%' : 'auto')};
  height: ${(props) => (props.isAccepted ? 'auto' : 'auto')};

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;


const WillYouGoOut: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const [noButtonPosition, setNoButtonPosition] = useState<{
    top: string;
    left: string;
  }>({
    top: "auto",
    left: "auto",
  });
  const [randomPosition, setRandomPosition] = useState<boolean>(false);
  const [noClickCount, setNoClickCount] = useState<number>(1);

  const handleYesClick = () => {
    console.log("She clicked Yes");
    setIsAccepted(true);
  };

  const handleNoClick = () => {
    setNoClickCount((prevCount) => {
      const newCount = prevCount + 1;
      return newCount;
    });

    console.log(`She clicked No ${noClickCount} times`);
    function getRndInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    setRandomPosition(true);
    setNoButtonPosition({
        top: `${getRndInteger(-40, 10)}vh`,
        left: `${getRndInteger(-10, 50)}vw`,
    });
  };

  if (isAccepted) {
    return (
      <Container isImage>
        <StyledImage src="/pirates.gif" alt="Celebration" isAccepted={isAccepted}/>
      </Container>
    );
  }

  return (
    <Container>
      <StyledImage src="/flowers.gif" alt="Cute rose" />
      <Question>Dinner Thursday followed by a fun thing?</Question>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Button
          onClick={handleNoClick}
          randomPosition={randomPosition}
          top={noButtonPosition.top}
          left={noButtonPosition.left}
          style={{ position: randomPosition ? 'absolute' : 'static' }}
        >
          No
        </Button>
        <Button isyesbutton onClick={handleYesClick}>
          Yes
        </Button>
      </div>
    </Container>
  );
};

export default WillYouGoOut;
