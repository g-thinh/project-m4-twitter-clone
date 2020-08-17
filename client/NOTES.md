# NOTES

## TASKLIST

- Render the `HomeFeed` route at `/` with all of the current user's tweets and retweets (COMPLETED)
- Render individual profile pages, by default `Profile` route should be the user's (COMPLETED)
- Render individual tweet feed (COMPLETED)
- Reroute tweets from feed to tweet details (COMPLETED)
- Reroute tweet display names to their profile page (COMPLETED)
- Render individual profile pages with the user's tweets (COMPLETED)
- Allow user to post retweets! (COMPLETED)
- Re-render VDOM whenever Post request is completed (COMPLETED)
- Posting new tweets, validation done, new messages fit into feed instead of overflowing.
- Reroute to Error page when GET/POST requests fall (use a 5second timeout or when the error msg is 500)
- App can be tab-navigated!!

Whats Next:

- Fetch retweets and likes and pass onto `ActionBar` from both `BigTweet` and `Tweet` components

- The `NavLink` in the Nav bar cannot refresh content, if you are on a profile page of another user, and attempt to re-redirect to the currentUser's profile page, this wont work

## TWEETS

When a user posts a new tweet, immediately fetch the latest tweets and re-render using aftereffects once "Tweets" data has been changed!

    //post then fetch new udpated tweets
    //postTweet().then(fetchTweet());

- `BigTweet` component renders tweet details, when a tweet's content section is clicked, it will redirect user to the tweet details route, when the `TweetDetails` component will fetch the API data from the URL parameter and display the single tweet with re-organized and re-sized tweet.

## PROFILE PAGE

- Conditional render of stats if available with feather `react-icons`
- Added url info stat on the user's header
- added fake tabs, only the Tweets tab is styled
- created seperate user feed componenent that will display all of the users tweets
- tweets now display if it was retweeted
- lifted all component states into the `CurrentUserContext` instead of prop drilling them into the sub-components
- The user can post tweets, and the page will fetch the latest tweets and re-render the tweet feed `HomeFeed`

## HOME FEED

- Each tweet can now redirect to a detailed version of the tweet by hovering over the content section.

- Refactored a copy of the HomeFeed component, that has the PostMessage and page title render removed. Does not require context, will just render the current user's tweets

## STUFF I WANNA FIX

### Up for Refactor

- Promise all in the Home Feed component to have the entire page render once
  the fetches are complete, otherwise, if the message box or the tweets fetch fail,
  only one or the other component renders

```js
const p1 = fetchProfile();
const p2 = fetchHomeFeed();
const p = [p1, p2];
Promise.all(p);
Promise.all([p1, p2]).then(([r1, r2]) => {
  setHomeFeed(r1);
});
```

### Like Button in the ActionBar of the Tweet

I really want to use the animation created in workshop m4-7, but I need to manipulate
the API data for each individual tweet so that it can be animated

- isLikedByCurrentUser

Tweets that are liked by the user can be called by the API within the isLiked prop,
must be able to do a PUT request to change that prop when the icon is clicked to manipulate
the prop
