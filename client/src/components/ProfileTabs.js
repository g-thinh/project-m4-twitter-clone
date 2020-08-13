import React from "react";
import styled from "styled-components";

import { COLORS } from "./COLORS";

export const ProfileTabs = () => {
  const ActiveTab = React.useRef(null);

  React.useEffect(() => {
    ActiveTab.current.focus();
  }, []);

  return (
    <Wrapper>
      <Tab ref={ActiveTab}>Tweets</Tab>
      <Tab>Media</Tab>
      <Tab>Likes</Tab>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Tab = styled.h1`
  background-color: inherit;
  text-align: center;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 22px;
  font-weight: 800;
  color: grey;
  flex: 1;
  border-bottom: 2px solid white;

  &:first-child {
    color: ${COLORS.primary};
    border-bottom: 2px solid ${COLORS.primary};
  }
`;
