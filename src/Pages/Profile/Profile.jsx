import { useContext, useEffect } from "react";
import { PostContext } from "../../Contexts/PostContext";
import { styles } from "./Profile.module.css";

import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";

const Profile = () => {
  const { postState, getUserPosts } = useContext(PostContext);
  const username = localStorage.getItem("user");
  useEffect(() => {
    getUserPosts(username);
  }, []);
  return (
    <>
      <Navbar />
      <h1>Profile</h1>
      <div>
        <ul>
          {postState.userPosts.map((post, index) => (
            <Post postData={post} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Profile;
