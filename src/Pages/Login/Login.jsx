import Button from "../../Components/Button/Button";
import styles from "./Login.module.css";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({ username: "", password: "" });
  const [userData, setUserData] = useState({});
  const [loginAttempted, setLoginAttempted] = useState(false);

  const fetchUser = async (loginData) => {
    try {
      const response = await fetch("api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      });
      const data = JSON.parse(response._bodyText);
      setUserData(JSON.parse(response._bodyText));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loginAttempted && userData.foundUser) {
      localStorage.setItem("encodedToken", userData.encodedToken);
      localStorage.setItem("user", userData.foundUser.username);
      localStorage.setItem("userId", userData.foundUser._id);
      navigate("/home");
    }
    if (loginAttempted && userData.errors) {
      alert(userData.errors[0]);
    }
  }, [loginAttempted, userData]);

  const loginHandeler = (event) => {
    event.preventDefault();
    setLoginAttempted(true);
    fetchUser(loginCreds);
  };

  const testLoginHandeler = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setLoginAttempted(true);
    }, 0);
    fetchUser({ username: "amulyachahal", password: "amulyachahal123" });
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Login</h1>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) =>
                setLoginCreds({ ...loginCreds, username: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) =>
                setLoginCreds({ ...loginCreds, password: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <Button onClick={loginHandeler}>Login</Button>
            <p></p>
            <Button onClick={testLoginHandeler}>
              Login with Test credentials
            </Button>{" "}
            <p></p>
            <Button onClick={() => navigate("/signup")}>
              Create new account
            </Button>
          </div>
        </form>
      </div>{" "}
    </>
  );
};
export default Login;
