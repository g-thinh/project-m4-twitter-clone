import React from "react";
import styled from "styled-components";

import { LoadingSpinner } from "./LoadingSpinner";
import { BigTweet } from "./BigTweet";

import { CurrentUserContext } from "./CurrentUserContext";

const TweetDetails = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  console.log(currentUser);
  const [tweetDetails, setTweetDetails] = React.useState(null);
  const [tweetStatus, setTweetStatus] = React.useState("loading");

  const fetchTweet = async () => {
    const url = `/api${window.location.pathname}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(
        `[TweetDetails.js] fetching tweet data from ${window.location.pathname}`
      );
      setTweetDetails(data);
      setTweetStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
      // window.location.href = "/";
    }
  };

  React.useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <Wrapper>
      {tweetStatus === "idle" ? (
        <BigTweet data={tweetDetails} />
      ) : (
        <LoadingSpinner />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  outline: 1px solid lightgray;
  width: 100%;
`;

export default TweetDetails;
