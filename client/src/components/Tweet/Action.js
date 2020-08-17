import React from "react";
import styled from "styled-components";

const Action = ({ color, size, children, handleClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      circleColor={color}
      style={{ width: size, height: size, color: isHovered ? color : null }}
      onClick={handleClick}
    >
      {children}
    </Wrapper>
  );
};

const UnstyledButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;

  &:active {
    color: inherit;
  }
`;

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: ${(p) => p.circleColor};
  }

  &:focus:after,
  &:hover:after {
    opacity: 0.12;
  }
`;

export default Action;
