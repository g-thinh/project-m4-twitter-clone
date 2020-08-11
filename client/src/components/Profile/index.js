import React from "react";
import styled from "styled-components";

import { LoadingSpinner } from "../LoadingSpinner";

import Header from "./Header";

const Profile = () => {
  const [userProfile, setUserProfile] = React.useState(null);
  const [userProfileStatus, setUserProfileStatus] = React.useState("loading");

  const fetchUserProfile = async () => {
    const url = `/api/${window.location.pathname}/profile`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setUserProfile(data);
      // console.log("data has been loaded!");
      // setStatus("idle");
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
        <Header data={userProfile} />
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
