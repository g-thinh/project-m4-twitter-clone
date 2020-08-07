import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

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
      setStatus("idle");
    } catch (error) {
      console.log("Can’t access " + url + " response. Blocked by browser?");
    }
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
