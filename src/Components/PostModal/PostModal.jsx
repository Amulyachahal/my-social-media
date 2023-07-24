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
      <div className={styles.container}>
        <Post postData={postState.singlePost} />
      </div>
      <Button style={{ marginBottom: "2rem" }} onClick={returnHandler}>
        Back
      </Button>
    </>
  );
};
export default PostModal;
