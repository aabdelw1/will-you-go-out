import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Question = styled.h2`
  margin-bottom: 5rem;
`;

interface ButtonProps {
  isyesbutton?: boolean;
  padding?: number;
  fontSize?: number;
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
    margin-top: 20px;
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

    setRandomPosition(true);
    setNoButtonPosition({
      top: `${Math.random() * 80}vh`,
      left: `${Math.random() * 80}vw`,
    });
  };

  if (isAccepted) {
    return (
      <Container>
        <img src="/pirates.gif" alt="Celebration" />
      </Container>
    );
  }

  return (
    <Container>
      <img src="/flowers.gif" alt="Cute rose" style={{ marginBottom: "1px" }} />
      <Question>Dinner Thursday followed by a fun surprise?</Question>
      <div>
        <Button
          onClick={handleNoClick}
          randomPosition={randomPosition}
          top={noButtonPosition.top}
          left={noButtonPosition.left}
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
