import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

export const Content = (props) => {
  return (
    <TweetContent>
      <Message>{props.message}</Message>
      {props.media.length > 0 && <Media src={props.media[0].url} />}
      <TimeStamp>
        {format(new Date(props.timestamp), "h:mm a · MMM d yyyy · ")} Critter
        web app
      </TimeStamp>
    </TweetContent>
  );
};

const TweetContent = styled.div`
  padding: 15px;
`;

const TimeStamp = styled.h1`
  color: gray;
  font-size: 16px;
  font-weight: 500;
  padding: 2%;
`;

const Message = styled.div`
  padding: 2% 15px;
  font-size: 24px;
  font-weight: 500;
  overflow-wrap: break-word;
`;

const Media = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  width: 99%;
  height: 95%;
`;
