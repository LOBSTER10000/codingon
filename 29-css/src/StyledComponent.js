import React from 'react';
import styled from 'styled-components';

// CSS in JS : js 안에 css를 작성함
// styled-components, emotion, styled-jsx, ...

const StyledContainer = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: ${(props) => props.bgColor || 'blue'};

  &:hover {
    transform: translateY(-20px);
    transition: transform 0.4s;
  }
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox bgColor="red"></StyledBox>
      <StyledBox bgColor="orange"></StyledBox>
      <StyledBox bgColor="yellow"></StyledBox>
      <StyledBox></StyledBox>
    </StyledContainer>
  );
}
