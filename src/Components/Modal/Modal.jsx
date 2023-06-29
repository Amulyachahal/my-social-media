import { useContext, useState } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";
import { PostContext } from "../../Contexts/PostContext";

const Modal = () => {
  const { postState, dispatchPostReducer, editPost } = useContext(PostContext);

  const postData = postState.postData;

  const [edit, setEdit] = useState(postData.content);

  const inputChangeHandler = (event) => {
    setEdit(event.target.value);
  };

  const saveEditHandler = () => {
    editPost(edit, postData._id);
    dispatchPostReducer({ type: "END_EDIT" });
  };

  const cancelEditHandler = () => {
    dispatchPostReducer({ type: "CANCEL_EDIT" });
  };
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.title}>{postData.username}</div>
          <div className={styles.username}>{postData.username}</div>
          <div>Date</div>
          <div className={styles.content}>
            <input
              className={styles.input}
              type="text"
              value={edit}
              onChange={inputChangeHandler}
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
export default Modal;
