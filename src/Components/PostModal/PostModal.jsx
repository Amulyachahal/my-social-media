import { useContext, useEffect } from "react";
import { PostContext } from "../../Contexts/PostContext";

import Post from "../Post/Post";
import styles from "./PostModal.module.css";
import Button from "../Button/Button";

const PostModal = () => {
  const { postState, dispatchPostReducer, getPost } = useContext(PostContext);

  const returnHandler = () => {
    dispatchPostReducer({ type: "HIDE_POST" });
  };

  useEffect(() => {
    getPost(postState.id);
  }, []);
  return (
    <>
      {" "}
      <Button onClick={returnHandler}>Back</Button>
      <div className={styles.container}>
        <Post postData={postState.singlePost} />
      </div>
    </>
  );
};
export default PostModal;
