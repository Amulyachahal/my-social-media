import { useContext } from "react";
import { userContext } from "../../Contexts/UserContext";
import { PostContext } from "../../Contexts/PostContext";

import { FiBookmark } from "react-icons/fi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  FcLike,
  FcLikePlaceholder,
  FcBookmark,
  FcComments,
} from "react-icons/fc";

import styles from "./Post.module.css";

const Post = ({ postData }) => {
  const { userState, postBookmarkData, removeBookmarkData } =
    useContext(userContext);

  const { postState, dispatchPostReducer, likePost, dislikePost, deletePost } =
    useContext(PostContext);

  const userName = localStorage.getItem("user");
  const userToken = localStorage.getItem("encodedToken");

  const addBookmarkHandler = () => {
    postBookmarkData(postData._id);
  };

  const removeBookmarkHandler = () => {
    removeBookmarkData(postData._id);
  };

  const likeHandler = () => {
    likePost(postData._id, userToken);
  };
  const dislikeHandler = () => {
    dislikePost(postData._id, userToken);
  };

  const deleteHandler = () => {
    deletePost(postData._id, userToken);
  };

  const editHandler = () => {
    dispatchPostReducer({ type: "START_EDIT", value: postData });
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
          {postState.liked[postData._id] ? (
            <FcLike onClick={dislikeHandler} />
          ) : (
            <FcLikePlaceholder onClick={likeHandler} />
          )}
          <FcComments
            onClick={() => {
              console.log("commented");
            }}
          />
          {userState.inBookmark[postData._id] ? (
            <FcBookmark onClick={removeBookmarkHandler} />
          ) : (
            <FiBookmark onClick={addBookmarkHandler} />
          )}
          {postData.username === userName && (
            <>
              <AiFillDelete onClick={deleteHandler} />
              <AiFillEdit onClick={editHandler} />
            </>
          )}
        </div>
        <br />
      </div>
    </>
  );
};
export default Post;
