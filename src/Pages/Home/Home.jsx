import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";
import Post from "../../Components/Post/Post";
import EditPostModal from "../../Components/EditPostModal/EditPostModal";
import Suggestedusers from "../../Components/SuggestedUsers/SuggestedUsers";
import CreatePost from "../../Components/CreatePost/CreatePost";
import PostModal from "../../Components/PostModal/PostModal";

import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../Contexts/PostContext";
import { userContext } from "../../Contexts/UserContext";
import BasicModal from "../../Components/BasicModal/BasicModal";

const Home = () => {
  const { postState, getUserPosts } = useContext(PostContext);
  const { userState, getUser, getAllUsers } = useContext(userContext);
  const [userFeed, setUserFeed] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("user");
    getUserPosts(username);
  }, [postState.createdPosts, postState.isEditing, postState.allPosts]);

  useEffect(() => {
    if (postState.followedUserPosts) {
      const uniqueArray = postState.followedUserPosts.reduce((acc, obj) => {
        if (!acc.find((item) => item._id === obj._id)) {
          acc.push(obj);
        }
        return acc;
      }, []);
      setUserFeed(uniqueArray);
    }
  }, [postState.followedUserPosts]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    getUser(userId);
  }, [userState.following]);

  return (
    <>
      <div className={styles.body}>
        <Navbar />
        {postState.showPost ? (
          <PostModal />
        ) : (
          // <BasicModal open={postState.showPost} />
          <>
            <h1>Home</h1>
            {postState.isEditing ? (
              <EditPostModal />
            ) : (
              <div className={styles.flexcontainer}>
                <div className={styles.mainbody}>
                  <CreatePost />
                  <div className={styles.post}>
                    <ul style={{ display: "inline-block" }}>
                      {userFeed.map((post, index) => (
                        <Post postData={post} key={index} />
                      ))}
                      {postState.userPosts.map((post, index) => (
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
            {/* <BasicModal /> */}
          </>
        )}
      </div>
      {/* <BasicModal /> */}
    </>
  );
};
export default Home;
