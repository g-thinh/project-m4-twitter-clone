import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  // const [homeFeed, setHomeFeed] = React.useState([]);
  // const [homeFeedStatus, setHomeFeedStatus] = React.useState("loading");
  const [profileStatus, setProfileStatus] = React.useState("loading");

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  const fetchProfile = async () => {
    const url = "/api/me/profile";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCurrentUser(data);
      console.log("data has been loaded!");
      // setStatus("idle");
      setProfileStatus("idle");
    } catch (error) {
      console.log(
        `Can’t access ${url} response. Blocked by browser? Error Code ${error}`
      );
    }
  };

  React.useEffect(() => {
    // const p1 = fetchProfile();
    // const p2 = fetchHomeFeed();
    // const p = [p1,p2];
    // Promise.all(p)
    //Promise.all([p1,p2]).then(([r1,r2])=> {setHomeFeed(r1)})
    fetchProfile();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, profileStatus }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
