import React from "react";
import styled from "styled-components";

// ## COMPONENTS ##
import { CurrentUserContext } from "../CurrentUserContext";
import { LoadingSpinner } from "../LoadingSpinner";
import { PostMessage } from "./PostMessage";
import { Tweet } from "../Tweet";

const HomeFeed = () => {
  const {
    currentUser,
    profileStatus,
    homeFeed,
    homeFeedStatus,
    postTweet,
  } = React.useContext(CurrentUserContext);

  //When the user posts a tweet, the homeFeed state will get updated
  //and the useEffect() will trigger a re-render

  React.useEffect(() => {}, [homeFeed]);

  return (
    <Wrapper>
      <Title>Home</Title>
      {profileStatus === "idle" ? (
        <PostMessage
          avatarSrc={currentUser.profile.avatarSrc}
          handleOnClick={postTweet}
        />
      ) : (
        <LoadingSpinner />
      )}
      <br />
      {homeFeedStatus === "idle" ? (
        <Tweet data={homeFeed} />
      ) : (
        <LoadingSpinner />
      )}
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
