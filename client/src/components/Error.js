import React from "react";
import styled from "styled-components";

import { FiAlertTriangle } from "react-icons/fi";

const Error = () => {
  return (
    <Wrapper>
      <FiAlertTriangle size={100} />
      <ErrorMsg>An Unknow Error has Occured</ErrorMsg>
      <ErrorTxt>
        Please try refreshing the page, or <a href="#"> contact support</a> if
        the problem persists
      </ErrorTxt>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid lightgray;
  width: 100%;
`;

const ErrorMsg = styled.h1`
  margin: 20px 0;
  font-size: 32px;
  font-weight: 800;
`;

const ErrorTxt = styled.h2`
  margin: 20px 0;
  font-size: 22px;
  font-weight: 400;
`;

export default Error;
