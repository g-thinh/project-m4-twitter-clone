import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ### IMPORT COMPONENTS ###
import GlobalStyles from "./components/GlobalStyles";
import Bookmarks from "./components/Bookmarks";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

import { CurrentUserProvider } from "./components/CurrentUserContext";

export default function App() {
  return (
    <Router>
      <Nav>
        <CurrentUserProvider>
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
        </CurrentUserProvider>
      </Nav>
    </Router>
  );
}
