import Modal from "../../Components/Modal/Modal";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";

import { PostContext } from "../../Contexts/PostContext";
import { useContext } from "react";

import styles from "./Explore.module.css";

const Explore = () => {
  const { postState } = useContext(PostContext);

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <h1>Explore</h1>
        {postState.isEditing ? (
          <Modal />
        ) : (
          <div>
            <ul>
              {postState.allPosts.map((post, index) => (
                <Post postData={post} key={index} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Explore;
