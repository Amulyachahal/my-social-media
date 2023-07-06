import styles from "./EditModal.module.css";
import Button from "../Button/Button";

import { useContext, useState } from "react";
import { userContext } from "../../Contexts/UserContext";

const EditModal = () => {
  const { userState, dispatchUserReducer, editUser } = useContext(userContext);

  const [user, setUser] = useState({
    firstName: userState.userData.firstName,
    lastName: userState.userData.lastName,
    bio: userState.userData.bio,
    website: userState.userData.website,
  });
  const userToken = localStorage.getItem("encodedToken");

  const cancelEditHandler = () => {
    dispatchUserReducer({ type: "END_USER_EDIT" });
  };

  const saveEditHandler = () => {
    editUser(user, userToken);
    dispatchUserReducer({ type: "END_USER_EDIT" });
  };

  const inputChangeHandler = () => {};

  return (
    <>
      {" "}
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.username}>{userState.userData.username}</div>
          <div className={styles.content}>
            <label>First Name: </label>
            <input
              className={styles.input}
              type="text"
              value={user.firstName}
              onChange={(event) =>
                setUser({ ...user, firstName: event.target.value })
              }
            />
          </div>
          <div className={styles.content}>
            {" "}
            <label>Last Name: </label>
            <input
              className={styles.input}
              type="text"
              value={user.lastName}
              onChange={(event) =>
                setUser({ ...user, lastName: event.target.value })
              }
            />
          </div>
          <div className={styles.content}>
            {" "}
            <label>Bio: </label>
            <input
              className={styles.input}
              type="text"
              value={user.bio}
              onChange={(event) =>
                setUser({ ...user, bio: event.target.value })
              }
            />
          </div>

          <div className={styles.content}>
            {" "}
            <label>Website: </label>
            <input
              className={styles.input}
              type="text"
              value={user.website}
              onChange={(event) =>
                setUser({ ...user, website: event.target.value })
              }
            />
          </div>
          <br />
          <div>
            <Button onClick={cancelEditHandler}>Cancel</Button>
            <Button onClick={saveEditHandler}>Save</Button>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};
export default EditModal;
