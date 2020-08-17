import React from "react";
import styled from "styled-components";

import { COLORS } from "../COLORS";

import { CurrentUserContext } from "../CurrentUserContext";

//This component will render a form that will allow the user to post a new
//tweet, the function that is passed onto the button is from the CurrentUserContext
//that will also do the character limit validation.

export const PostMessage = (props) => {
  const { currentUser, charCount, setCharCount, SendPost } = React.useContext(
    CurrentUserContext
  );

  function handleCharCount(ev) {
    setCharCount(280 - ev.target.value.length);
  }

  React.useEffect(() => {
    console.log("[PostMessage.js] has rendered...");
    return () => {
      console.log("[PostMessage.js] is unmounting...");
    };
  }, []);

  return (
    <Wrapper>
      <MessageContainer>
        <Avatar src={currentUser.profile.avatarSrc} alt="user profile" />
        <TextArea
          id="Message"
          type="text"
          placeholder="What's happening?..."
          onChange={handleCharCount}
        ></TextArea>
      </MessageContainer>
      <MessageButtonCtn>
        <MsgCount
          style={{
            color: charCount < 0 ? "red" : "green",
          }}
        >
          {charCount}
        </MsgCount>
        <MsgButton onClick={SendPost}>Post</MsgButton>
      </MessageButtonCtn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
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
  align-items: center;
  justify-content: flex-end;
  margin: 10px 50px;
`;

const MsgCount = styled.h1`
  font-size: 1.3rem;
  opacity: 0.5;
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

  &:focus {
    outline: 2px solid black;
  }

  &:active {
    transform: scale(1.05);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  font-size: 24px;
  outline: none;
  border: none;
  padding-left: 20px;
  margin: 15px;
  resize: none;
  font-family: inherit;

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
