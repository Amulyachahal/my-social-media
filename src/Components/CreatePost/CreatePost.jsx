import { useContext, useState } from "react";
import { PostContext } from "../../Contexts/PostContext";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import styles from "./CreatePost.module.css";
import Button from "../Button/Button";

const CreatePost = () => {
  const [input, setInput] = useState("");
  const { createPost, dispatchPostReducer, postState } =
    useContext(PostContext);
  const userToken = localStorage.getItem("encodedToken");

  const createPostHandler = () => {
    createPost(input, userToken);
    setInput("");
  };

  const sortHandler = (event) => {
    dispatchPostReducer({ type: "SORT_POST", payload: event.target.value });
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
        <div className={styles.sortcontainer}>
          <div className={styles.sortvalue}>{postState.sortValue}</div>
          <select onClick={sortHandler} className={styles.dropdown}>
            <option className={styles.option} value="Trending">
              Trending
            </option>
            <option className={styles.option} value="Latest">
              Latest
            </option>
            <option className={styles.option} value="Older">
              Older
            </option>
          </select>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
