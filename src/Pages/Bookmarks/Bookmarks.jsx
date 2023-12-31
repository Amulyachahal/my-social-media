import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import EditPostModal from "../../Components/EditPostModal/EditPostModal";
import styles from "./Bookmarks.module.css";
import PostModal from "../../Components/PostModal/PostModal";

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
        {userState.userBookmark.length == 0 ? (
          <div className={styles.message}>No Bookmarks 📪</div>
        ) : (
          <>
            {postState.isEditing ? (
              <EditPostModal />
            ) : (
              <div className={styles.posts}>
                {postState.showPost ? (
                  <PostModal />
                ) : (
                  <ul>
                    {userState.userBookmark.map((post, index) => (
                      <Post postData={post} key={index} />
                    ))}
                  </ul>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Bookmarks;
