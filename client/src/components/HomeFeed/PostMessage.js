import React from "react";
import styled from "styled-components";

import { COLORS } from "../COLORS";

export const PostMessage = (props) => {
  return (
    <Wrapper>
      <MessageContainer>
        <Avatar src={props.avatarSrc} alt="user profile" />
        <TextArea type="text" placeholder="What's happening?..."></TextArea>
      </MessageContainer>
      <MessageButtonCtn>
        <MsgButton>Post</MsgButton>
      </MessageButtonCtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 10px 15px -8px rgba(211, 211, 211, 0.75); */
  box-shadow: 0px 10px 0px 0px rgba(211, 211, 211, 1);
`;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

const MessageButtonCtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 50px;
`;

const MsgButton = styled.button`
  height: 50px;
  font-size: 1.3rem;
  font-weight: 800;
  width: 200px;
  border-radius: 20px;
  border: none;
  margin: 0 50px;
  background: ${COLORS.primary};
  color: white;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(1.05);
    outline: none;
  }
`;

const TextArea = styled.input`
  width: 100%;
  height: 100px;
  font-size: 24px;
  outline: none;
  border: none;
  padding-left: 20px;

  &::placeholder {
    opacity: 0.7;
  }
`;

const Avatar = styled.img`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;
