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
import Modal from "../Modal/Modal";

const Post = ({ postData }) => {
  const { userState, postBookmarkData, removeBookmarkData } =
    useContext(userContext);

  const { postState, dispatchPostReducer, likePost, dislikePost, deletePost } =
    useContext(PostContext);

  const addBookmarkHandler = () => {
    postBookmarkData(postData._id);
  };

  const removeBookmarkHandler = () => {
    removeBookmarkData(postData._id);
  };

  const likeHandler = () => {
    likePost(postData._id);
  };
  const dislikeHandler = () => {
    dislikePost(postData._id);
  };

  const deleteHandler = () => {
    deletePost(postData._id);
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
          <AiFillDelete onClick={deleteHandler} />
          <AiFillEdit onClick={editHandler} />
        </div>
        <br />
      </div>
    </>
  );
};
export default Post;