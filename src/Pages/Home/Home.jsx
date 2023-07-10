import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";
import Post from "../../Components/Post/Post";
import EditPostModal from "../../Components/EditPostModal/EditPostModal";
import Suggestedusers from "../../Components/SuggestedUsers/SuggestedUsers";
import CreatePost from "../../Components/CreatePost/CreatePost";
import PostModal from "../../Components/PostModal/PostModal";

import { useContext, useEffect } from "react";
import { PostContext } from "../../Contexts/PostContext";
import { userContext } from "../../Contexts/UserContext";

const Home = () => {
  const { postState, getUserPosts } = useContext(PostContext);
  const { userState, getUser, getAllUsers, followUser } =
    useContext(userContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  const followedUserData = userState.userData.following;

  console.log(followedUserData);  

  const followedUsers = () => {
    // userState.userData.following;
  };

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
          </>
        )}
      </div>
    </>
  );
};
export default Home;
