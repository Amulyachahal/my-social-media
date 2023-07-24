import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { userContext } from "../../Contexts/UserContext";

import Button from "../Button/Button";
import styles from "./SuggestedUsers.module.css";
import { PostContext } from "../../Contexts/PostContext";

const Suggestedusers = () => {
  const { userState, followUser, unfollowUser, getUser } =
    useContext(userContext);
  const { getFollowedUserPosts, postState } = useContext(PostContext);

  const userName = localStorage.getItem("user");

  const followedUserData = userState.userData.following;

  console.log(followedUserData);
  console.log("in suggested users");
  console.log(postState.followedUserPosts);

  const followHandler = (user) => {
    followUser(user._id);
  };
  const unfollowHandler = (user) => {
    unfollowUser(user._id);
  };

  const profileHandler = (user) => {
    getUser(user._id);
  };

  useEffect(() => {
    if (followedUserData) {
      console.log("in use effect");

      userState.userData.following.map((user) =>
        getFollowedUserPosts(user.username)
      );
      console.log("before exiting use effect");
    }
  }, [followedUserData]);

  return (
    <>
      <div className={styles.suggestedusers}>
        <div className={styles.heading}>Suggested Users</div>
        <div>
          {userState.users.map((user, index) =>
            user.username === userName ? null : (
              <li key={index} style={{ listStyle: "none" }}>
                <div className={styles.title}>
                  {user.firstName + " " + user.lastName}
                </div>
                <div className={styles.username}>{user.username}</div>
                <div>
                  <Button onClick={() => profileHandler}>
                    <NavLink
                      to={`/profile/${user.username}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Profile
                    </NavLink>
                  </Button>
                  {userState.following[user._id] ? (
                    <Button onClick={() => unfollowHandler(user)}>
                      Unfollow
                    </Button>
                  ) : (
                    <Button onClick={() => followHandler(user)}>Follow</Button>
                  )}
                </div>
              </li>
            )
          )}
        </div>
      </div>
    </>
  );
};
export default Suggestedusers;
