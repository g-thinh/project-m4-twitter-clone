import React from "react";
import styled from "styled-components";

//import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import LikeButton from "../LikeButton";

export const ActionBar = (props) => {
  const [isLiked, setIsLiked] = React.useState(props.isLiked);
  const [numLikes, setNumLikes] = React.useState(props.numLikes);

  const [isRetweeted, setIsRetweeted] = React.useState(props.isRetweeted);
  const [numRetweets, setNumRetweets] = React.useState(props.numRetweets);

  const putLike = () => {
    const url = `/api/tweet/${props.tweetId}/like`;
    try {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({ like: !isLiked }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      // .then((res) => res.json())
      // .then((data) => console.log(data));
      setIsLiked(!isLiked);
      isLiked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1);
    } catch (error) {
      throw error;
    }
  };

  const putRetweet = () => {
    const url = `/api/tweet/${props.tweetId}/retweet`;
    try {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({ retweet: !isRetweeted }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      setIsRetweeted(!isRetweeted);
      isRetweeted
        ? setNumRetweets(numRetweets - 1)
        : setNumRetweets(numRetweets + 1);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {}, [isLiked, isRetweeted]);

  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>

      <ButtonContainer>
        <Action color="rgb(23, 191, 99)" size={40} handleClick={putRetweet}>
          <TweetActionIcon
            kind="retweet"
            //color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            color="rgb(23, 191, 99)"
          />
        </Action>
        <Count>{numRetweets}</Count>
      </ButtonContainer>
      <ButtonContainer>
        <Action color="rgb(224, 36, 94)" size={40} handleClick={putLike}>
          <LikeButton isLiked={isLiked} />
        </Action>
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
