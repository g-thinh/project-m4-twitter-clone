# NOTES

## Up for Refactor

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
