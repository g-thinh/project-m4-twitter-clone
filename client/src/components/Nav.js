import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

import { CurrentUserContext } from "./CurrentUserContext";

import { COLORS } from "./COLORS";

// ##################### MAIN NAV COMPONENT ########################
const Nav = ({ children }) => {
  //here i import the currentUserContext to provide the default url parameter
  //to go to the profile page

  //To make this easier, I wrote the link to the current User statically instead
  //of using the Context

  return (
    <SideBar>
      <NavWrapper>
        <Logo style={{ height: 60, width: 60 }} />
        <NavList>
          <NavItem>
            <StyledLink exact to="/" activeStyle={{ color: COLORS.primary }}>
              <FiHome size={32} />
              <span>Home</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/treasurymog"
              activeStyle={{ color: COLORS.primary }}
            >
              <FiUser size={32} />
              <span>Profile</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink
              to="/notifications"
              activeStyle={{ color: COLORS.primary }}
            >
              <FiBell size={32} />
              <span>Notifications</span>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/bookmarks" activeStyle={{ color: COLORS.primary }}>
              <FiBookmark size={32} />
              <span>Bookmarks</span>
            </StyledLink>
          </NavItem>
        </NavList>
        <MeowButton>Meow</MeowButton>
      </NavWrapper>
      {children}
    </SideBar>
  );
};

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 1.6rem;
  text-decoration: none;
  color: black;
  /* padding-left: 12px; */

  & span {
    padding-left: 25px;
  }
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
  width: 33%;
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
