import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  // These states define what the current user can interact with, which includes
  // creating posts
  // ####### USER STATES #######
  const [currentUser, setCurrentUser] = React.useState(null);
  const [homeFeed, setHomeFeed] = React.useState([]);
  const [homeFeedStatus, setHomeFeedStatus] = React.useState("loading");
  const [profileStatus, setProfileStatus] = React.useState("loading");
  const [charCount, setCharCount] = React.useState(280);

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  const fetchProfile = async () => {
    const url = `/api/me/profile`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCurrentUser(data);
      setProfileStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
      window.location.href = "/404";
    }
  };

  //retrieves homefeed for the current user
  const fetchHomeFeed = async () => {
    const url = `/api/me/home-feed`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setHomeFeed(data);
      setHomeFeedStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
      window.location.href = "/404";
    }
  };

  //the PostMessage component contains a TextArea with an ID called "Message"
  //once the tweet is posted, re-fetch the homeFeed which triggers a re-render
  //within the HomeFeed component

  const postTweet = async () => {
    const url = `/api/tweet`;
    let msg = document.getElementById("Message").value;
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ status: msg }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      document.getElementById("Message").value = "";
      setCharCount(280);
      return await res.json();
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
    }
  };

  function SendPost(ev) {
    ev.preventDefault();
    console.log("New Post Received Sent!");
    if (charCount > 0) {
      postTweet().then(fetchHomeFeed());
      window.location.reload();
    } else {
      window.alert("Too many letters");
      return;
    }
  }

  // Once the Context Provider mounts, it will fetch the current user's tweet feed
  // and profile data ONCE

  React.useEffect(() => {
    console.log("[CurrentUserContext.js] is mounted!");
    fetchProfile();
    fetchHomeFeed();
    return () => {
      console.log("[CurrentUserContext.js] is unmounting...");
    };
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        profileStatus,
        homeFeed,
        setHomeFeed,
        homeFeedStatus,
        setHomeFeedStatus,
        charCount,
        setCharCount,
        fetchHomeFeed,
        fetchProfile,
        SendPost,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
