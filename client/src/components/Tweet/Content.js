import React from "react";
import styled from "styled-components";

export const Content = (props) => {
  return (
    <TweetContent>
      <Message>{props.message}</Message>
      {props.media.length > 0 && <Media src={props.media[0].url} />}
    </TweetContent>
  );
};

const TweetContent = styled.div`
  /* border: 5px solid red; */
  /* word-wrap: break-word; */
  padding: 15px;
`;

const Message = styled.h1`
  padding: 15px 0;
  font-size: 22px;
  font-weight: 500;
  word-wrap: break-word;
  /* width: 100%; */
`;

const Media = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  width: 99%;
  height: 95%;
`;
