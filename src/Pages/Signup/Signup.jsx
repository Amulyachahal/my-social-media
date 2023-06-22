import styles from "./Signup.module.css";
import { useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [signupAttempted, setSignupAttempted] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [signupCreds, setSignupCreds] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const signupUser = async (userData) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
      });
      console.log(JSON.parse(response._bodyText));
      setResponseData(JSON.parse(response._bodyText));
    } catch (error) {
      console.log(error);
    }
  };

  const signupHandler = (event) => {
    event.preventDefault();
    signupUser(signupCreds);
    setSignupAttempted(true);
    console.log(signupCreds);
  };

  useEffect(() => {
    if (signupAttempted && responseData.createdUser) {
      navigate("/login");
    }
    if (signupAttempted && responseData.errors) {
      alert(responseData.errors[0]);
    }
  }, [signupAttempted, responseData]);

  return (
    <>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="fname"
              name="name"
              onChange={(e) =>
                setSignupCreds({ ...signupCreds, firstName: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="lname"
              name="name"
              onChange={(e) =>
                setSignupCreds({ ...signupCreds, lastName: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="user"
              onChange={(e) =>
                setSignupCreds({ ...signupCreds, username: e.target.value })
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
                setSignupCreds({ ...signupCreds, password: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <Button onClick={signupHandler}>Sign Up</Button>
            <p></p>
            <Button onClick={(e) => navigate("/login")}>
              Already have an account ? Login
            </Button>
          </div>
        </form>
      </div>{" "}
    </>
  );
};
export default Signup;
