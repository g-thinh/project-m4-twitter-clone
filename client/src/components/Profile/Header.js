import React from "react";
import styled from "styled-components";

import { COLORS } from "../COLORS";

import { format } from "date-fns";

import { FiCalendar, FiGlobe, FiLink } from "react-icons/fi";

const Header = (props) => {
  const DATA = props.data.profile;

  // console.log(DATA);

  // ###### RENDER COMPONENT #####
  return (
    <Wrapper>
      <BannerContainer>
        <Banner src={DATA.bannerSrc} />
      </BannerContainer>
      <ProfileContainer>
        <Avatar src={DATA.avatarSrc} />
        <FollowBtn>
          {DATA.isBeingFollowedByYou ? "Following" : "Follow"}
        </FollowBtn>
        <DisplayName>{DATA.displayName}</DisplayName>
        <HandleName>
          @{DATA.handle}
          {DATA.isFollowingYou && <FollowTag>Follows You</FollowTag>}
        </HandleName>
        <ProfileBio>{DATA.bio}</ProfileBio>
        <Row>
          {DATA.location && (
            <>
              <FiGlobe size={22} />
              <Stat>{DATA.location}</Stat>
            </>
          )}
          {DATA.url && (
            <>
              <FiLink size={22} />
              <Stat>
                <StatLink href={`/${DATA.url}`}>{DATA.url}</StatLink>
              </Stat>
            </>
          )}
          <FiCalendar size={22} />
          <Stat>Joined {format(new Date(DATA.joined), "MMMM yyyy")}</Stat>
        </Row>
        <Row>
          <Stat>
            <strong>{DATA.numFollowing}</strong> Following
          </Stat>
          <Stat>
            <strong>{DATA.numFollowers}</strong> Followers
          </Stat>
        </Row>
      </ProfileContainer>
    </Wrapper>
  );
};

// ############## STYLED COMPONENTS ##############

const Wrapper = styled.div`
  display: block;
  /* border: 5px solid red; */
  position: relative;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin: 8px 0;
  /* justify-content: center; */
`;

const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Banner = styled.img`
  height: 300px;
  width: 100%;
  z-index: 1;
`;

const ProfileContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 30%;
  /* border: 3px solid goldenrod; */
  margin: -120px 0 auto 0;
  padding: 20px;
  z-index: 999;
`;

const Avatar = styled.img`
  position: relative;
  border-radius: 100px;
  width: 180px;
  height: 180px;
  border: 5px solid white;
`;

const DisplayName = styled.h1`
  padding: 1% 0;
  font-size: 26px;
  font-weight: 700;
  color: black;
`;

const HandleName = styled.h2`
  color: gray;
  font-size: 18px;
  font-weight: 400;
`;

const FollowTag = styled.span`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  background: #f5f5f5;
  padding: 6px;
  border-radius: 10px;
`;

const ProfileBio = styled.h2`
  margin: 4% auto;
  font-size: 22px;
  font-weight: 500;
`;

const Stat = styled.h3`
  font-weight: 400;
  color: gray;
  margin: 0 20px 0 5px;
  line-height: 1.6;
`;

const StatLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const FollowBtn = styled.button`
  position: absolute;
  right: 5%;
  top: 30%;

  height: 50px;
  font-size: 1.3rem;
  font-weight: 800;
  width: 180px;
  border-radius: 20px;
  border: none;
  text-align: center;
  /* margin: 10px auto; */
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

export default Header;
