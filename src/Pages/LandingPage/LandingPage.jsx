import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import styles from "./LandingPage.module.css";
import landingpage from "../../Images/LandingPage/landingpage.jpg";
import { useContext } from "react";
import { userContext } from "../../Contexts/UserContext";
import { PostContext } from "../../Contexts/PostContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { userState } = useContext(userContext);
  const { postState } = useContext(PostContext);
  console.log("users: ", userState.users);
  console.log("posts: ", postState.posts);
  return (
    <>
      <div>
        <div className={styles.container}>
          <h1>Sociascape</h1>

          <div style={{}}>
            <div>
              <span>CONNECT</span>with your friends
            </div>
            <div>
              <span>FOLLOW</span>people around the globe
            </div>

            <div>
              <span>SHARE</span>what you are thinking
            </div>
          </div>
          <div>
            <Button onClick={() => navigate("/signup")}>Join Now</Button>
            <NavLink className={styles.link} to="/login">
              Already have an account?
            </NavLink>
          </div>
        </div>
        <div className={styles.banner}>
          <img
            className={styles.img}
            alt="landing page banner"
            src={landingpage}
          />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
