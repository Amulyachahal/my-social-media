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
  console.log(postData.createdAt);

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
        <div className={styles.content}>{postData.content}</div>
        <div className={styles.date}>
          {postData.createdAt.slice(11, 16) +
            " " +
            postData.createdAt.slice(0, 10)}
        </div>
        <br />
        <div>
          {postState.liked[postData._id] ? (
            <div className={styles.icon}>
              <FcLike onClick={dislikeHandler} />
            </div>
          ) : (
            <div className={styles.icon}>
              <FcLikePlaceholder onClick={likeHandler} />
            </div>
          )}
          <div className={styles.icon}>
            <FcComments
              onClick={() => {
                console.log("commented");
              }}
            />
          </div>
          {userState.inBookmark[postData._id] ? (
            <div className={styles.icon}>
              <FcBookmark onClick={removeBookmarkHandler} />
            </div>
          ) : (
            <div className={styles.icon}>
              <FiBookmark onClick={addBookmarkHandler} />
            </div>
          )}
          {postData.username === userName && (
            <>
              <div className={styles.icon}>
                <AiFillDelete onClick={deleteHandler} />
              </div>
              <div className={styles.icon}>
                <AiFillEdit onClick={editHandler} />
              </div>
            </>
          )}
        </div>
        <br />
      </div>
    </>
  );
};
export default Post;
