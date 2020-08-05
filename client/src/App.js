import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// ### IMPORT COMPONENTS ###
import GlobalStyles from "./components/GlobalStyles";
import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <div>
        <NavWrapper>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/tweet">Tweet</Link>
            </li>
            <li>
              <Link to="/:profileId">Profile</Link>
            </li>
          </ul>
        </NavWrapper>
        <Switch>
          <Route exact={true} path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route path="/:profileId">
            <Profile />
          </Route>
        </Switch>
        <GlobalStyles />
      </div>
    </Router>
  );
}

const NavWrapper = styled.div`
  display: flex;
  border: 5px solid goldenrod;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  & ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`;
