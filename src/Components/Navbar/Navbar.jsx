import { useNavigate } from "react-router";
// import { MdExplore, MdHome, MdBookmarks, MdLogout } from "react-icons/md";
// import { GiPlagueDoctorProfile } from "react-icons/gi";

import Button from "../Button/Button";
// import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const username = localStorage.getItem("user");
  const navigate = useNavigate();
  const logoutHandeler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button
        onClick={() => {
          navigate("/explore");
        }}
      >
        Explore
      </Button>
      <Button
        onClick={() => {
          navigate("/bookmarks");
        }}
      >
        Bookmarks
      </Button>
      <NavLink to={`/profile/${username}`}>
        <Button>Profile</Button>
      </NavLink>
      <Button onClick={logoutHandeler}>Logout </Button>
    </>
  );
};
export default Navbar;
