import Button from "../Button/Button";
import styles from "./Navbar.module.css";

import { useNavigate } from "react-router";
import { MdExplore, MdHome, MdBookmarks, MdLogout } from "react-icons/md";
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Navbar = () => {
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
      <Button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </Button>
      <Button onClick={logoutHandeler}>Logout </Button>
    </>
  );
};
export default Navbar;
