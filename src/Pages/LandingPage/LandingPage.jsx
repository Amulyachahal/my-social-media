import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../Contexts/UserContext";
import { PostContext } from "../../Contexts/PostContext";

import Button from "../../Components/Button/Button";
import styles from "./LandingPage.module.css";
import landingpage from "../../Images/LandingPage/landingpage.jpg";
import Card from "react-animated-3d-card";
const LandingPage = () => {
  // const glare = new Card3d(document.querySelector(".card"), {
  //   delta: 10,
  //   perspective: 500,
  //   startX: 0,
  //   startY: 0,
  //   glareOpacity: 0.5,
  //   axis: "all",
  //   scale: 1,
  // });
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className={styles.container}>
          <h1>Sociascape</h1>

          <div>
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
        </div>{" "}
        <div className={styles.banner}>
          <Card shineStrength="0.1">
            <img
              className={styles.img}
              alt="landing page banner"
              src={landingpage}
            />
            {/* <input type="text" /> */}
          </Card>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
