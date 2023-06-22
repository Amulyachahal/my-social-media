import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

import { PostContext } from "../../Contexts/PostContext";
import { useContext } from "react";

import Post from "../../Components/Post/Post";

const Home = () => {
  const { postState, dispatchPostReducer } = useContext(PostContext);

  return (
    <>
      <div className={styles.body}>
        <Navbar />
        <h1>Home</h1>
        <div>
          <ul>
            {postState.posts.map((post, index) => (
              <Post postData={post} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
