import { createContext, useEffect, useReducer } from "react";
import { UserReducer } from "../Reducers/UserReducer";
import { toast } from "react-toastify";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, dispatchUserReducer] = useReducer(UserReducer, {
    users: [],
    userBookmark: [],
    inBookmark: {},
    userData: {},
    following: {},
    isEditing: false,
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

  const followUser = async (followUserId) => {
    try {
      const response = await fetch(`/api/users/follow/${followUserId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      console.log(JSON.parse(response._bodyText));
      dispatchUserReducer({
        type: "FOLLOW",
        payload: followUserId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowUser = async (followUserId) => {
    try {
      const response = await fetch(`/api/users/unfollow/${followUserId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      console.log(JSON.parse(response._bodyText));
      dispatchUserReducer({ type: "UN_FOLLOW", payload: followUserId });
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
  const userId = localStorage.getItem("userId");

  const getUser = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`, { method: "GET" });
      console.log(JSON.parse(response._bodyText));
      dispatchUserReducer({
        type: "SET_USER",
        payload: JSON.parse(response._bodyText).user,
      });

      // console.log(state.users);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (user, token) => {
    try {
      const response = await fetch("/api/users/edit", {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ userData: user }),
      });
      dispatchUserReducer({
        type: "SAVE_USER_EDIT",
        payload: JSON.parse(response._bodyText).user,
      });

      console.log(JSON.parse(response._bodyText).user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
    getUser(userId);
  }, []);

  return (
    <userContext.Provider
      value={{
        userState,
        dispatchUserReducer,
        getBookmarkData,
        postBookmarkData,
        removeBookmarkData,
        getUser,
        followUser,
        unfollowUser,
        getAllUsers,
        editUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
