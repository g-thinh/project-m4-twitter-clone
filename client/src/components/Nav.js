import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

import { COLORS } from "./COLORS";

const Nav = ({ children }) => {
  return (
    <SideBar>
      <NavWrapper>
        <Logo style={{ height: 60, width: 60 }} />
        <NavList>
          <NavItem>
            <FiHome size={30} />
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <FiUser size={30} />
            <StyledLink to="/:profileId">Profile</StyledLink>
          </NavItem>
          <NavItem>
            <FiBell size={30} />
            <StyledLink to="/notifications">Notifications</StyledLink>
          </NavItem>
          <NavItem>
            <FiBookmark size={30} />
            <StyledLink to="/bookmarks">Bookmarks</StyledLink>
          </NavItem>
        </NavList>
        <MeowButton>Meow</MeowButton>
      </NavWrapper>
      {children}
    </SideBar>
  );
};

const StyledLink = styled(Link)`
  font-weight: 800;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  padding-left: 12px;
`;

const SideBar = styled.div`
  display: flex;
  margin: 0 5%;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 5px solid purple; */
  height: 100vh;
  width: 30%;
  margin-top: 2%;
`;

const NavList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 10px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  /* border: 3px dashed purple; */
  border-radius: 30px;
  padding: 15px;
  margin: 3px 0;

  &:hover {
    background: ${COLORS.buttonBg};
    color: ${COLORS.primary};
  }

  &:hover ${StyledLink} {
    color: ${COLORS.primary};
  }
`;

const MeowButton = styled.button`
  height: 50px;
  font-size: 1.3rem;
  font-weight: 800;
  width: 90%;
  border-radius: 20px;
  border: none;
  text-align: center;
  margin: 30px auto;
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

export default Nav;
