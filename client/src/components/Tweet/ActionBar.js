import React from "react";
import styled from "styled-components";

//import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import LikeButton from "../LikeButton";

export const ActionBar = (props) => {
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40}>
        <TweetActionIcon
          kind="retweet"
          //color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
          color="rgb(23, 191, 99)"
        />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40}>
        <LikeButton isLiked={props.isLiked} />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Stat = styled.h1`
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  margin: 3px 0;
`;

export default ActionBar;
