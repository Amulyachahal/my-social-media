import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

import { PostContext } from "../../Contexts/PostContext";
import { useContext, useState } from "react";

import Post from "../../Components/Post/Post";
import Button from "../../Components/Button/Button";
import Modal from "../../Components/Modal/Modal";

const Home = () => {
  const { postState, dispatchPostReducer } = useContext(PostContext);
  const userToken = localStorage.getItem("encodedToken");

  const [input, setInput] = useState("");
  // console.log(postState.posts.reverse());

  const createPost = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { authorization: userToken },
        body: JSON.stringify({ postData: { content: input } }),
      });

      console.log(JSON.parse(response._bodyText).posts);
      dispatchPostReducer({
        type: "SET_ALL_POSTS",
        payload: JSON.parse(response._bodyText).posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createPostHandler = () => {
    createPost();
    setInput("");
  };

  return (
    <>
      <div className={styles.body}>
        <Navbar />
        <h1>Home</h1>
        {postState.isEditing ? (
          <Modal />
        ) : (
          <>
            <div className={styles.container}>
              <input
                type="text"
                value={input}
                placeholder="Write something interesting..."
                onChange={(event) => setInput(event.target.value)}
                className={styles.input}
              />
              <Button onClick={createPostHandler}>Add Post</Button>
            </div>

            <div>
              <ul>
                {postState.allPosts.map((post, index) => (
                  <Post postData={post} key={index} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
