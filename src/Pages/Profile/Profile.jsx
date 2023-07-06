import styles from "./Profile.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import EditModal from "../../Components/EditModal/EditModal";

import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { PostContext } from "../../Contexts/PostContext";
import { userContext } from "../../Contexts/UserContext";

const Profile = () => {
  const { postState, getUserPosts } = useContext(PostContext);
  const { userState, getUser, dispatchUserReducer } = useContext(userContext);
  const { username } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const userData = userState.users.find((user) => user.username === username);
  console.log(userState.userData);

  const logoutHandeler = () => {
    localStorage.clear();
    navigate("/login");
  };

  const editHandler = () => {
    dispatchUserReducer({ type: "START_USER_EDIT" });
  };

  useEffect(() => {
    getUserPosts(userData.username);
  }, [postState.isEditing]);

  useEffect(() => {
    getUser(userData._id);
  }, [userState.isEditing]);

  return (
    <>
      <div className={styles.bg}>
        <Navbar />
        <h1>Profile</h1>
        {userState.isEditing ? (
          <EditModal />
        ) : (
          <div className={styles.container}>
            <img
              alt="profile"
              src="data:image/jpeg;base64,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"
              className={styles.image}
            />
            <div className={styles.title}>
              {userState.userData.firstName + " " + userState.userData.lastName}
            </div>
            <div className={styles.username}>{userState.userData.username}</div>
            <div> {userState.userData.bio}</div>
            <div>
              <a
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                href="https://amulya-chahal-portfolio.netlify.app/"
              >
                {userState.userData.website}
              </a>
            </div>

            <div>
              {/* <div>{userData.following.length} Following</div>
          <div>{userData.followers.length} Followers</div> */}
            </div>
            {userState.userData.username === user && (
              <div>
                <Button onClick={editHandler}>Edit Profile</Button>
                <Button onClick={logoutHandeler}>Logout</Button>
              </div>
            )}
          </div>
        )}
        {postState.isEditing ? (
          <Modal />
        ) : (
          <div className={styles.posts}>
            <ul>
              {postState.userPosts.map((post, index) => (
                <Post postData={post} key={index} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Profile;
