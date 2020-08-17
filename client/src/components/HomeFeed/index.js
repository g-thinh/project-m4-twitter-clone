import React from "react";
import styled from "styled-components";

// ## COMPONENTS ##
import { CurrentUserContext } from "../CurrentUserContext";
import { LoadingSpinner } from "../LoadingSpinner";
import { PostMessage } from "./PostMessage";
import { Tweet } from "../Tweet";

const HomeFeed = () => {
  //import the current user's profile data to render the avatar image
  //in the PostMessage.js component
  const { currentUser, profileStatus } = React.useContext(CurrentUserContext);

  //This fetch is slightly similiar to the one found in UserFeed.js
  //I found that it was easier to re-render the feed itself

  const [userFeed, setUserFeed] = React.useState();
  const [userFeedStatus, setUserFeedStatus] = React.useState("loading");

  const fetchFeed = async () => {
    const url = `/api/me/home-feed`;
    try {
      console.log(`[HomeFeed.js] fetching feed data for current user`);
      const res = await fetch(url);
      const data = await res.json();
      setUserFeed(data);
      setUserFeedStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
      window.location.href = "/404";
    }
  };

  //When the user posts a tweet, the homeFeed state will get updated
  //and the useEffect() will trigger a re-render

  React.useEffect(() => {
    console.log("[HomeFeed.js] has rendered...");
    fetchFeed();
    return () => {
      console.log("[HomeFeed.js] is unmounting...");
    };
  }, []);

  return (
    <Wrapper>
      <Title>Home</Title>
      {profileStatus === "idle" ? (
        <PostMessage avatarSrc={currentUser.profile.avatarSrc} />
      ) : (
        <LoadingSpinner />
      )}
      <br />
      {userFeedStatus === "idle" ? (
        <Tweet data={userFeed} />
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
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  width: 80%;
`;

export default HomeFeed;
