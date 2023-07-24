import { createContext, useEffect, useReducer } from "react";
import { PostReducer } from "../Reducers/PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postState, dispatchPostReducer] = useReducer(PostReducer, {
    allPosts: [],
    userPosts: [],
    followedUserPosts: [],
    createdPosts: [],
    liked: {},
    isEditing: false,
    postData: {},
    sortValue: "",
    singlePost: {},
    showPost: false,
    post_id: "",
  });

  const getAllPosts = async () => {
    try {
      const response = await fetch("/api/posts");

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
      const response = await fetch(`/api/posts/user/${username}`);
      const userPosts = JSON.parse(response._bodyText).posts;
      console.log(JSON.parse(response._bodyText));

      dispatchPostReducer({
        type: "SET_USER_POSTS",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getFollowedUserPosts = async (username) => {
    try {
      const response = await fetch(`/api/posts/user/${username}`);
      const userPosts = JSON.parse(response._bodyText).posts;
      console.log(JSON.parse(response._bodyText).posts);
      dispatchPostReducer({
        type: "SET_FOLLOWED_USER_POSTS",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`);
      console.log(JSON.parse(response._bodyText).post);

      dispatchPostReducer({
        type: "SHOW_POST",
        value: JSON.parse(response._bodyText).post,
        id: postId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (input, token) => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: { content: input } }),
      });
      console.log(response);

      console.log(JSON.parse(response._bodyText).posts);
      dispatchPostReducer({
        type: "SET_CREATED_POSTS",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (postId, token) => {
    try {
      const response = await fetch(`/api/posts/like/${postId}/`, {
        method: "POST",
        headers: { authorization: token },
      });
      console.log(JSON.parse(response._bodyText));
      dispatchPostReducer({ type: "IS_LIKED", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  const dislikePost = async (postId, token) => {
    try {
      const response = await fetch(`/api/posts/dislike/${postId}/`, {
        method: "POST",
        headers: { authorization: token },
      });
      console.log(JSON.parse(response._bodyText));
      dispatchPostReducer({ type: "IS_DISLIKED", payload: postId });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId, token) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: { authorization: token },
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

  const editPost = async (edit, postId, token) => {
    try {
      const response = await fetch(`/api/posts/edit/${postId}`, {
        method: "POST",
        headers: { authorization: token },
        body: JSON.stringify({ postData: { content: edit } }),
      });
      console.log(JSON.parse(response._bodyText));
      dispatchPostReducer({
        type: "SAVE_EDIT",
        payload: JSON.parse(response._bodyText).posts,
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
          createPost,
          getPost,
          getAllPosts,
          getFollowedUserPosts,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};
