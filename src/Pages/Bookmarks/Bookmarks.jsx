import { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import { userContext } from "../../Contexts/UserContext";

const Bookmarks = () => {
  const { userState, getBookmarkData } = useContext(userContext);
  useEffect(() => {
    getBookmarkData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Bookmarks</h1>
      <ul>
        {userState.userBookmark.map((post, index) => (
          <Post postData={post} key={index} />
        ))}
      </ul>
    </>
  );
};
export default Bookmarks;
