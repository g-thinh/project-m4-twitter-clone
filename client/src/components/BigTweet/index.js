import React from "react";
import styled from "styled-components";

//### TWEET SUB-COMPONENT IMPORTS ####

import { Header } from "./Header";
import { Content } from "./Content";
import { ActionBar } from "./ActionBar";

import { FiArrowLeft } from "react-icons/fi";

//####################### TWEET COMPONENT ############################
export const BigTweet = (props) => {
  const ID = props.data.tweetIds;
  const TWEETS = props.data.tweetsById;

  const DATA = props.data.tweet;

  console.log("THIS PAGE RENDERS THIS");
  console.log(DATA);

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

const TweetList = styled.ul`
  /* border: 1px solid lightgray; */
  box-shadow: 0px 10px 15px -8px rgba(211, 211, 211, 0.75);

  & li {
    border-bottom: 1px solid lightgray;
    /* border: 5px solid red; */
  }

  & li:hover {
    background: #f9f9f9;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;
