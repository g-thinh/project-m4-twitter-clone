import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//### TWEET SUB-COMPONENT IMPORTS ####

import { Header } from "./Header";
import { Content } from "./Content";
import { ActionBar } from "./ActionBar";

import { CurrentUserContext } from "../CurrentUserContext";

//####################### TWEET COMPONENT ############################
export const Tweet = (props) => {
  const { homeFeed } = React.useContext(CurrentUserContext);

  const ID = props.data.tweetIds;
  const TWEETS = props.data.tweetsById;

  React.useEffect(() => {
    console.log("[Tweet.js] mounted and rendered data");
    console.log(`There are now ${ID.length} Tweets...`);
    return () => {
      console.log("[Tweet.js] is unmounting...");
    };
  }, [homeFeed]);

  return (
    <TweetList>
      {ID.map((id) => (
        <li key={id}>
          <Header
            retweet={TWEETS[id].retweetFrom}
            avatarSrc={TWEETS[id].author.avatarSrc}
            displayName={TWEETS[id].author.displayName}
            handleName={TWEETS[id].author.handle}
            timestamp={TWEETS[id].timestamp}
          />
          <Link to={`/tweet/${TWEETS[id].id}`}>
            <Content message={TWEETS[id].status} media={TWEETS[id].media} />
          </Link>
          <ActionBar
            tweetId={TWEETS[id].id}
            isRetweeted={TWEETS[id].isRetweeted}
            isLiked={TWEETS[id].isLiked}
            numLikes={TWEETS[id].numLikes}
            numRetweets={TWEETS[id].numRetweets}
          />
        </li>
      ))}
    </TweetList>
  );
};

const TweetList = styled.ul`
  /* border: 1px solid lightgray; */
  box-shadow: 0px 10px 15px -8px rgba(211, 211, 211, 0.75);

  & li {
    border-bottom: 1px solid lightgray;
    /* border: 5px solid red; */
  }

  & li:hover {
    background: #f9f9f9;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;
