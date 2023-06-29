import { createContext, useEffect, useReducer } from "react";
import { PostReducer } from "../Reducers/PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postState, dispatchPostReducer] = useReducer(PostReducer, {
    allPosts: [],
    userPosts: [],
    liked: {},
    isEditing: false,
    postData: {},
  });

  const username = localStorage.getItem("user");
  const userToken = localStorage.getItem("encodedToken");

  const getAllPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const allPosts = JSON.parse(response._bodyText).posts;
      // console.log(allPosts);

      dispatchPostReducer({
        type: "SET_ALL_POSTS",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserPosts = async (username) => {
    try {
      const response = await fetch(`api/posts/user/${username}`);
      const userPosts = JSON.parse(response._bodyText).posts;
      console.log(userPosts);

      dispatchPostReducer({
        type: "SET_USER_POSTS",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/like/${postId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      console.log(JSON.parse(response._bodyText));
      dispatchPostReducer({ type: "IS_LIKED", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/dislike/${postId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      console.log(JSON.parse(response._bodyText));
      dispatchPostReducer({ type: "IS_DISLIKED", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    console.log(postId);
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: { authorization: userToken },
      });

      console.log(JSON.parse(response._bodyText).posts);
      dispatchPostReducer({
        type: "DELETE_POST",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (edit, postId) => {
    try {
      const response = await fetch(`/api/posts/edit/${postId}`, {
        method: "POST",
        headers: { authorization: userToken },
        body: JSON.stringify({ postData: { content: edit } }),
      });
      console.log(JSON.parse(response._bodyInit));
      dispatchPostReducer({
        type: "SAVE_EDIT",
        payload: JSON.parse(response._bodyInit).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <PostContext.Provider
        value={{
          postState,
          dispatchPostReducer,
          getUserPosts,
          likePost,
          dislikePost,
          deletePost,
          editPost,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};