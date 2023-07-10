import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../Contexts/UserContext";

import Button from "../Button/Button";
import styles from "./SuggestedUsers.module.css";

const Suggestedusers = () => {
  const { userState, followUser, unfollowUser, getUser } =
    useContext(userContext);
  const userName = localStorage.getItem("user");

  const followHandler = (user) => {
    followUser(user._id);
  };
  const unfollowHandler = (user) => {
    unfollowUser(user._id);
  };

  const profileHandler = (user) => {
    getUser(user._id);
  };

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
