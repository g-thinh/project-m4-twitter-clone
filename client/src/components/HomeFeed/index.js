import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import { LoadingSpinner } from "../LoadingSpinner";

import { PostMessage } from "./PostMessage";

const HomeFeed = () => {
  const { currentUser, status } = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (status === "idle") {
      console.log("HomeFeed received data!");
      console.log(currentUser.profile);
    } else {
      console.log("Data is still loading...");
    }
  });

  return (
    <Wrapper>
      <Title>Home</Title>
      {status === "idle" ? (
        <PostMessage avatarSrc={currentUser.profile.avatarSrc} />
      ) : (
        // <img src={currentUser.profile.avatarSrc} alt="user profile" />
        <LoadingSpinner />
      )}
      <br />
    </Wrapper>
  );
};

const Title = styled.h1`
  padding: 10px 25px;
  font-size: 30px;
  font-weight: 800;
  line-height: 1.6;
  outline: 1px solid lightgray;
`;

const Wrapper = styled.div`
  border: 1px solid lightgray;
  width: 100%;
`;

export default HomeFeed;
