import { createContext, useEffect, useReducer } from "react";
import { PostReducer } from "../Reducers/PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postState, dispachPostReducer] = useReducer(PostReducer, {
    posts: [],
  });

  const getAllPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const allPosts = JSON.parse(response._bodyText).posts;
      //   console.log(allPosts);

      dispachPostReducer({
        type: "SET_ALL_POSTS",
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
      <PostContext.Provider value={{ postState, dispachPostReducer }}>
        {children}
      </PostContext.Provider>
    </>
  );
};
