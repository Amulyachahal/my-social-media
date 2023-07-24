import EditPostModal from "../../Components/EditPostModal/EditPostModal";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import PostModal from "../../Components/PostModal/PostModal";

import { PostContext } from "../../Contexts/PostContext";
import { useContext, useEffect } from "react";

import styles from "./Explore.module.css";

const Explore = () => {
  const { postState, getAllPosts } = useContext(PostContext);
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <h1>Explore</h1>
        {postState.isEditing ? (
          <EditPostModal />
        ) : (
          <div className={styles.posts}>
            {postState.showPost ? (
              <PostModal />
            ) : (
              <ul>
                {postState.allPosts.map((post, index) => (
                  <Post postData={post} key={index} />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Explore;
