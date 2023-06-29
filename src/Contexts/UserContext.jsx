import { createContext, useEffect, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducer";
// import { getAllUsers } from "../Services/UserService";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, dispatchUserReducer] = useReducer(UserReducer, {
    users: [],
    userBookmark: [],
    inBookmark: {},
  });

  const userToken = localStorage.getItem("encodedToken");

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/users");

      dispatchUserReducer({
        type: "SET_ALL_USERS",
        payload: JSON.parse(response._bodyText).users,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getBookmarkData = async () => {
    try {
      const response = await fetch(`/api/users/bookmark/`, {
        method: "GET",
        headers: { authorization: userToken },
      });
      console.log(JSON.parse(response._bodyText).bookmarks);
      dispatchUserReducer({
        type: "SET_BOOKMARK",
        payload: JSON.parse(response._bodyText).bookmarks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const postBookmarkData = async (postId) => {
    try {
      const response = await fetch(`/api/users/bookmark/${postId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      dispatchUserReducer({ type: "ADD_IN_BOOKMARK", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  const removeBookmarkData = async (postId) => {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${postId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      dispatchUserReducer({ type: "REMOVE_IN_BOOKMARK", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  //   const fetchUser = async (userId) => {
  //     try {
  //       const response = await fetch(`/api/users/${userId}`);
  //       //   const usersArray = JSON.parse(response);
  //       console.log(response);

  //       console.log(state.users);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    getAllUsers();
    // getBookmarkData();
  }, []);

  return (
    <userContext.Provider
      value={{
        userState,
        dispatchUserReducer,
        getBookmarkData,
        postBookmarkData,
        removeBookmarkData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
