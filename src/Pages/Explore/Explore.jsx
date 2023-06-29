import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";

import { PostContext } from "../../Contexts/PostContext";
import { useContext, useEffect, useState } from "react";

const Explore = () => {
  const { postState, dispatchPostReducer } = useContext(PostContext);

  return (
    <>
      <Navbar />
      <h1>Explore</h1>
      <div>
        <ul>
          {postState.allPosts.map((post, index) => (
            <Post postData={post} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Explore;
