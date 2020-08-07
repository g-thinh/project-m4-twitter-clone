import React from "react";
import styled, { keyframes } from "styled-components";

import { FiLoader } from "react-icons/fi";

export const LoadingSpinner = () => {
  return (
    <Wrapper>
      <StyledLoading size={40} />
    </Wrapper>
  );
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  padding: 10%;
  /* border: 5px solid red; */
  text-align: center;
`;

const StyledLoading = styled(FiLoader)`
  margin: 0 auto;
  color: gray;
  animation: ${spin} 2s infinite linear;
  /* transition: all 500ms ease-in-out; */
`;
