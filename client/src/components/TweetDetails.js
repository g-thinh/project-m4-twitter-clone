import React from "react";
import styled from "styled-components";

import { LoadingSpinner } from "./LoadingSpinner";
import { BigTweet } from "./BigTweet";

const TweetDetails = () => {
  const [tweetDetails, setTweetDetails] = React.useState(null);
  const [tweetStatus, setTweetStatus] = React.useState("loading");

  const fetchTweet = async () => {
    const url = `/api${window.location.pathname}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTweetDetails(data);
      // console.log("data has been loaded!");
      // setStatus("idle");
      setTweetStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
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
