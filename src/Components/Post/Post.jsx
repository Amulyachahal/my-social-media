import { useContext, useEffect } from "react";
import { userContext } from "../../Contexts/UserContext";
import Button from "../Button/Button";
import styles from "./Post.module.css";

const Post = ({ postData }) => {
  const { userState, dispatchUserReducer, getBookmarkData } =
    useContext(userContext);
  // console.log(postData);
  const userToken = localStorage.getItem("encodedToken");

  const postBookmarkData = async (postId) => {
    try {
      const response = await fetch(`/api/users/bookmark/${postId}/`, {
        method: "POST",
        headers: { authorization: userToken },
      });
      console.log(response);
      dispatchUserReducer({ type: "ADD_IN_BOOKMARK", payload: postId });
      // console.log(response._bodyText);
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
      console.log(response);
      dispatchUserReducer({ type: "REMOVE_IN_BOOKMARK", payload: postId });
      // console.log(response._bodyText);
    } catch (error) {
      console.log(error);
    }
  };

  const addBookmarkHandler = () => {
    postBookmarkData(postData._id);
  };

  const removeBookmarkHandler = () => {
    removeBookmarkData(postData._id);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{postData.username}</div>
        <div className={styles.username}>{postData.username}</div>
        <div>Date</div>
        <div className={styles.content}>{postData.content}</div>
        <br />
        <div>
          <Button>like</Button>
          <Button>comment</Button>
          {userState.inBookmark[postData._id] ? (
            <Button onClick={removeBookmarkHandler}>Remove Bookmark</Button>
          ) : (
            <Button onClick={addBookmarkHandler}>Add bookmark</Button>
          )}
        </div>
        <br />
      </div>
    </>
  );
};
export default Post;
