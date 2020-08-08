import React from "react";
import styled from "styled-components";

//### TWEET SUB-COMPONENT IMPORTS ####

import { Header } from "./Header";
import { Content } from "./Content";
import { ActionBar } from "./ActionBar";

//####################### TWEET COMPONENT ############################
export const Tweet = (props) => {
  const ID = props.data.tweetIds;
  const TWEETS = props.data.tweetsById;

  ID.forEach((id) => {
    console.log(TWEETS[id]);
  });

  // console.log(ID);

  return (
    <TweetList>
      {ID.map((id) => (
        <li key={id}>
          <Header
            avatarSrc={TWEETS[id].author.avatarSrc}
            displayName={TWEETS[id].author.displayName}
            handleName={TWEETS[id].author.handle}
            timestamp={TWEETS[id].timestamp}
          />
          <Content message={TWEETS[id].status} media={TWEETS[id].media} />
          <ActionBar
            isRetweeted={TWEETS[id].isRetweeted}
            isLiked={TWEETS[id].isLiked}
            numLikes={TWEETS[id].numLikes}
            numRetweets={TWEETS[id].numRetweets}
          />
        </li>
      ))}
    </TweetList>
  );
};

const TweetList = styled.ul`
  /* border: 1px solid lightgray; */
  box-shadow: 0px 10px 15px -8px rgba(211, 211, 211, 0.75);

  & li {
    border-bottom: 1px solid lightgray;
  }
`;
