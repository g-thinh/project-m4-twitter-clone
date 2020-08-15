import React from "react";
import styled from "styled-components";

import { LoadingSpinner } from "../LoadingSpinner";
import { ProfileTabs } from "../ProfileTabs";

import Header from "./Header";
import UserFeed from "../UserFeed";

const Profile = () => {
  const [userProfile, setUserProfile] = React.useState(null);
  const [userProfileStatus, setUserProfileStatus] = React.useState("loading");

  const fetchUserProfile = async () => {
    const url = `/api/${window.location.pathname}/profile`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(
        `[Profile.js] fetching profile data for ${window.location.pathname}`
      );
      setUserProfile(data);
      setUserProfileStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
    }
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <Wrapper>
      {userProfileStatus === "idle" ? (
        <>
          <Header data={userProfile} />
          <ProfileTabs />
          <UserFeed />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  outline: 1px solid lightgray;
  width: 100%;
`;

export default Profile;
