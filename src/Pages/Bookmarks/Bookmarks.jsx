import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import Modal from "../../Components/Modal/Modal";
import styles from "./Bookmarks.module.css";

import { useContext, useEffect } from "react";
import { userContext } from "../../Contexts/UserContext";
import { PostContext } from "../../Contexts/PostContext";

const Bookmarks = () => {
  const { userState, getBookmarkData } = useContext(userContext);
  const { postState } = useContext(PostContext);

  useEffect(() => {
    getBookmarkData();
  }, [userState.inBookmark, postState.isEditing]);

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <h1>Bookmarks</h1>
        {postState.isEditing ? (
          <Modal />
        ) : (
          <div>
            <ul>
              {userState.userBookmark.map((post, index) => (
                <Post postData={post} key={index} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Bookmarks;
