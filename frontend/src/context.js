import { useEffect } from "react";
import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);

  const getUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const getCurrentUser = () => {
    let user = sessionStorage.getItem("user");
    console.log(user);
    if (user) {
      return JSON.parse(user);
    } else {
      return {};
    }
  };

  const logout = () => {
    setLoggedin(false);
    setCurrentUser(null);
    sessionStorage.removeItem("user");
  };

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    setLoggedin(getUser());
  }, []);

  return (
    <BlogContext.Provider
      value={[loggedin, setLoggedin, currentUser, setCurrentUser]}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
