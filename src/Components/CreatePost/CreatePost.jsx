import { useContext, useState } from "react";
import { PostContext } from "../../Contexts/PostContext";

import styles from "./CreatePost.module.css";
import Button from "../Button/Button";

const CreatePost = () => {
  const [input, setInput] = useState("");
  const { createPost } = useContext(PostContext);
  const userToken = localStorage.getItem("encodedToken");

  const createPostHandler = () => {
    createPost(input, userToken);
    setInput("");
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          value={input}
          placeholder="Write something interesting..."
          onChange={(event) => setInput(event.target.value)}
          className={styles.input}
        />
        <Button disabled={input.length === 0} onClick={createPostHandler}>
          Add Post
        </Button>
      </div>
    </>
  );
};
export default CreatePost;
