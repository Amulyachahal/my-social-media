import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";
import Post from "../../Components/Post/Post";
import Modal from "../../Components/Modal/Modal";
import Suggestedusers from "../../Components/SuggestedUsers/SuggestedUsers";
import CreatePost from "../../Components/CreatePost/CreatePost";

import { useContext, useEffect } from "react";
import { PostContext } from "../../Contexts/PostContext";
import { userContext } from "../../Contexts/UserContext";

const Home = () => {
  const { postState } = useContext(PostContext);
  const { getUser, getAllUsers } = useContext(userContext);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getUser(userId);
    getAllUsers();
  }, []);

  return (
    <>
      <div className={styles.body}>
        <Navbar />
        <h1>Home</h1>
        {postState.isEditing ? (
          <Modal />
        ) : (
          <div className={styles.flexcontainer}>
            <div className={styles.mainbody}>
              <CreatePost />
              <div>
                <ul>
                  {postState.allPosts.map((post, index) => (
                    <Post postData={post} key={index} />
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.suggestedusers}>
              <Suggestedusers />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
