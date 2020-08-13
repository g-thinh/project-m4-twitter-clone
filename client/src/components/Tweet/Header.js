import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import TweetActionIcon from "./TweetActionIcon";

export const Header = (props) => {
  return (
    <>
      {typeof props.retweet != "undefined" && (
        <Retweet>
          <TweetActionIcon kind="retweet" color="rgb(23, 191, 99)" size="16" />
          <RetweetMsg> {props.retweet.displayName} Remeowed</RetweetMsg>
        </Retweet>
      )}
      <TweetHandleBar>
        <Avatar src={props.avatarSrc} />
        <DisplayName href={`/${props.handleName}`}>
          {props.displayName}
        </DisplayName>
        <HandleName>@{props.handleName}</HandleName>
        <TimeStamp>
          - {format(new Date(props.timestamp), "MMM do, yyyy")}
        </TimeStamp>
      </TweetHandleBar>
    </>
  );
};

const Retweet = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 1% 4%;
`;

const RetweetMsg = styled.span`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 600;
  color: grey;
`;

const TimeStamp = styled.h1`
  margin-left: 10px;
  color: gray;
  font-weight: 400;
`;

const TweetHandleBar = styled.div`
  display: flex;
  align-items: center;
  /* outline: 1px solid lightgray; */
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 15px;
`;

const DisplayName = styled.a`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const HandleName = styled.h2`
  color: gray;
  font-weight: 400;
  margin-left: 10px;
`;
