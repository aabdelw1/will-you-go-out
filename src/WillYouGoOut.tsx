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
  isYesButton?: boolean;
  padding?: number;
  fontSize?: number;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isYesButton ? "#83c465" : "#d2554e")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 45px;
  font-size: 25px;
  margin: 0 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const WillYouGoOut: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  if (isAccepted) {
    return (
      <Container>
        <img src="/yay.gif" alt="Celebration" />
      </Container>
    );
  }

  return (
    <Container>
      <img src="/flowers.gif" alt="Cute rose" style={{ marginBottom: "1px" }} />
      <Question>Dinner Thursday followed by a fun surpirse?</Question>
      <div>
        <Button onClick={handleYesClick}>No</Button>
        <Button isYesButton onClick={handleYesClick}>
          Yes
        </Button>
      </div>
    </Container>
  );
};

export default WillYouGoOut;
