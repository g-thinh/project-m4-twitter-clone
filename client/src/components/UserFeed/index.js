import React from "react";
import styled from "styled-components";

import { LoadingSpinner } from "../LoadingSpinner";

import { Tweet } from "../Tweet";

const UserFeed = () => {
  //### STATES AND CONTEXT ####

  const [userFeed, setUserFeed] = React.useState();
  const [userFeedStatus, setUserFeedStatus] = React.useState("loading");

  //### FUNCTIONS AND HOOKS ####

  const handleName = window.location.pathname;

  const fetchFeed = async () => {
    const url = `/api/${handleName}/feed`;
    try {
      console.log(`[UserFeed.js] fetching feed data for ${handleName}`);
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

  React.useEffect(() => {
    fetchFeed();
  }, []);

  // ### RENDER COMPONENT ###
  return (
    <Wrapper>
      {userFeedStatus === "idle" ? (
        <Tweet data={userFeed} />
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
