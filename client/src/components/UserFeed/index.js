import React from "react";
import styled from "styled-components";

import { LoadingSpinner } from "../LoadingSpinner";

import { Tweet } from "../Tweet";

const UserFeed = () => {
  //### STATES AND CONTEXT ####

  const [homeFeed, setHomeFeed] = React.useState();
  const [homeFeedStatus, setHomeFeedStatus] = React.useState("loading");

  //### FUNCTIONS AND HOOKS ####

  const handleName = window.location.pathname;

  const fetchFeed = async () => {
    const url = `/api/${handleName}/feed`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
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
    fetchFeed();
  }, [homeFeed]);

  // ### RENDER COMPONENT ###
  return (
    <Wrapper>
      {homeFeedStatus === "idle" ? (
        <Tweet data={homeFeed} />
      ) : (
        <LoadingSpinner />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid lightgray;
  width: 100%;
`;

export default UserFeed;
