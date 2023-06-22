import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router";

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
      <Button onClick={logoutHandeler}>Logout</Button>
      <Button>Add Post</Button>
    </>
  );
};
export default Navbar;
