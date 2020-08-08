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

      <ButtonContainer>
        <Action color="rgb(23, 191, 99)" size={40}>
          <TweetActionIcon
            kind="retweet"
            //color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            color="rgb(23, 191, 99)"
          />
        </Action>
        {props.numRetweets > 0 && <Count>{props.numRetweets}</Count>}
      </ButtonContainer>
      <ButtonContainer>
        <Action color="rgb(224, 36, 94)" size={40}>
          <LikeButton isLiked={props.isLiked} />
        </Action>
        {props.numLikes > 0 && <Count>{props.numRetweets}</Count>}
      </ButtonContainer>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Count = styled.h1`
  padding-left: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 50px; */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
  margin: 3px 0;
`;

export default ActionBar;
