import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

export const Header = (props) => {
  return (
    <TweetHandleBar>
      <Avatar src={props.avatarSrc} />
      <DisplayName href={`/${props.handleName}`}>
        {props.displayName}
      </DisplayName>
      <HandleName>@{props.handleName}</HandleName>
      <TimeStamp>- {format(new Date(props.timestamp), "MMM Do")}</TimeStamp>
    </TweetHandleBar>
  );
};

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
`;

const HandleName = styled.h2`
  color: gray;
  font-weight: 400;
  margin-left: 10px;
`;
