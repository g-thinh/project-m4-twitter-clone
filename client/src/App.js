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
import Error from "./components/Error";

import { CurrentUserProvider } from "./components/CurrentUserContext";

export default function App() {
  return (
    <Router>
      <CurrentUserProvider>
        <Nav>
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
            <Route path="/404">
              <Error />
            </Route>
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path="/:profileId">
              <Profile />
            </Route>
          </Switch>
          <GlobalStyles />
        </Nav>
      </CurrentUserProvider>
    </Router>
  );
}
