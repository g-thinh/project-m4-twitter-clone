import React from "react";
import styled from "styled-components";
import moment from "moment";

export const UserFeed = (props) => {
  const ID = props.data.tweetIds;
  const TWEETS = props.data.tweetsById;

  ID.forEach((id) => {
    console.log(TWEETS[id]);
  });

  // console.log(ID);

  return (
    <>
      <Wrapper>
        <TweetList>
          {ID.map((id) => (
            <li key={id}>
              <TweetHandleBar>
                <Avatar src={TWEETS[id].author.avatarSrc} />
                <DisplayName>{TWEETS[id].author.displayName}</DisplayName>
                <HandleName>@{TWEETS[id].author.handle}</HandleName>
                <TimeStamp>
                  - {moment(TWEETS[id].timestamp).format("MMM Do")}
                </TimeStamp>
                <TweetNameHolder>
                  {/* <DisplayName>{TWEETS[id].author.displayName}</DisplayName>
                  <HandleName>@{TWEETS[id].author.handle}</HandleName> */}
                </TweetNameHolder>
              </TweetHandleBar>
              <TweetContent>
                <Message>{TWEETS[id].status}</Message>
                {TWEETS[id].media.length > 0 && (
                  <Media src={TWEETS[id].media[0].url} />
                )}
              </TweetContent>
            </li>
          ))}
        </TweetList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* width: inherit; */
  /* margin: 0 20px; */
  /* border: 5px solid goldenrod; */
  /* padding: 5px; */
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 15px;
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

const TweetContent = styled.div`
  /* border: 5px solid red; */
  padding: 15px;
`;

const Message = styled.div`
  padding: 15px 0;
  font-size: 22px;
  font-weight: 500;
`;

const Media = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  width: 99%;
  height: 95%;
`;

const TweetNameHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayName = styled.h1`
  font-size: 18px;
`;

const HandleName = styled.h2`
  color: gray;
  font-weight: 400;
  margin-left: 10px;
`;

const TweetList = styled.ul`
  /* border: 1px solid lightgray; */
  box-shadow: 0px 10px 15px -8px rgba(211, 211, 211, 0.75);

  & li {
    border-bottom: 1px solid lightgray;
  }
`;
