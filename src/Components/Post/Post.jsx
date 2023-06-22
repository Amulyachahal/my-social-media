import { useContext } from "react";
import { PostContext } from "../../Contexts/PostContext";
import Button from "../Button/Button";
import styles from "./Post.module.css";

const Post = ({ postData }) => {
  const { postState, dispachPostReducer } = useContext(PostContext);
  // console.log(postData);

  const postBookmarkData = async (postId) => {
    try {
      const response = await fetch(`/api/users/bookmark/:${postId}`, {
        method: "POST",
      });
      console.log(response._bodyText);
    } catch (error) {
      console.log(error);
    }
  };

  const bookmarkHandler = () => {
    postBookmarkData(postData._id);
    // dispachPostReducer({type:'ADD_BOOKMARK',value:postData})
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
          <Button onClick={bookmarkHandler}>bookmark</Button>
        </div>
        <br />
      </div>
    </>
  );
};
export default Post;
