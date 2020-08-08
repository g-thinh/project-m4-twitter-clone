import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import { LoadingSpinner } from "../LoadingSpinner";

import { PostMessage } from "./PostMessage";
import { UserFeed } from "./UserFeed";
import { Tweet } from "../Tweet";

const HomeFeed = () => {
  //### STATES AND CONTEXT ####

  const { currentUser, profileStatus } = React.useContext(CurrentUserContext);
  const [homeFeed, setHomeFeed] = React.useState();
  const [homeFeedStatus, setHomeFeedStatus] = React.useState("loading");

  //### FUNCTIONS AND HOOKS ####

  const fetchHomeFeed = async () => {
    const url = "/api/me/home-feed";
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setHomeFeed(data);
      // console.log("data has been loaded!");
      // setStatus("idle");
      setHomeFeedStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
    }
  };

  React.useEffect(() => {
    fetchHomeFeed();
  }, []);

  //### CONSOLE LOG STUFF ###

  // if (profileStatus === "idle") {
  //   console.log("HomeFeed received data!");
  //   console.log(currentUser.profile);
  // } else {
  //   console.log(currentUser);
  //   console.log("Profile Data is still loading...");
  // }

  // if (homeFeedStatus === "idle") {
  //   console.log("HomeFeed data received!");
  //   console.log(homeFeed);
  // } else {
  //   console.log(homeFeed);
  //   console.log("HomeFeed Data is still loading...");
  // }

  // ### RENDER COMPONENT ###
  return (
    <Wrapper>
      <Title>Home</Title>
      {profileStatus === "idle" ? (
        <PostMessage avatarSrc={currentUser.profile.avatarSrc} />
      ) : (
        <LoadingSpinner />
      )}
      <br />
      {/* {homeFeedStatus === "idle" ? (
        <UserFeed data={homeFeed} />
      ) : (
        <LoadingSpinner />
      )} */}
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
