import React from "react";
import styled from "styled-components";

//### TWEET SUB-COMPONENT IMPORTS ####

import { Header } from "./Header";
import { Content } from "./Content";
import { ActionBar } from "./ActionBar";

import { FiArrowLeft } from "react-icons/fi";

//####################### TWEET COMPONENT ############################

//This is the larger version of the tweet, renders whenever the user clicks
//on a tweet's content from any tweet feeds.

export const BigTweet = (props) => {
  //tweet data passed as props is converted into state.
  const [DATA, setDATA] = React.useState(props.data.tweet);

  React.useEffect(() => {
    console.log("[BigTweet.js] mounted and rendered data");
    return () => {
      console.log("[BigTweet.js] unmounting..");
    };
  }, []);

  return (
    <div>
      <ReturnLink>
        <a href="javascript:history.back()">
          <FiArrowLeft size={30} />
        </a>
        <Title>Meow</Title>
      </ReturnLink>
      <Header
        retweet={DATA.retweetFrom}
        avatarSrc={DATA.author.avatarSrc}
        displayName={DATA.author.displayName}
        handleName={DATA.author.handle}
      />
      <Content
        message={DATA.status}
        media={DATA.media}
        timestamp={DATA.timestamp}
      />
      <ActionBar
        tweetId={DATA.id}
        isRetweeted={DATA.isRetweeted}
        isLiked={DATA.isLiked}
        numLikes={DATA.numLikes}
        numRetweets={DATA.numRetweets}
      />
    </div>
  );
};

const ReturnLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 10px 25px;
  outline: 1px solid lightgray;
`;

const Title = styled.span`
  margin-left: 2%;
  line-height: 1.6;
  font-size: 30px;
  font-weight: 800;
`;
