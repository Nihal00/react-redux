import React, { useState } from "react";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import {
  addUserDetails,
  userLogin,
} from "../../redux/action/UserDetailsAction";
import logo from "../../assest/icons/hai.png";

const SignInForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function handleLogin() {
    const data = {
      username: username,
      password: password,
    };

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {
        dispatch(addUserDetails(data));
        console.log(data);

        //go to profile page
        dispatch(userLogin(data.token));
      })
      .catch((error) => setErr(error.message));
  }

  return (
    <div className="SignIn">
      <p className="welcome-tag">
        Welcome back! <img src={logo} />{" "}
      </p>
      <h3 className="sign-in-title">Sign in to your account</h3>

      <div className="form">
        <div className="inner-container email-input">
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            name="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="inner-container password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {err && <p className="error">{err}</p>}
        </div>

        <button type="submit" className="btn" onClick={handleLogin}>
          Continue
        </button>
      </div>
      <p className="forgot-password">Forget your password?</p>
    </div>
  );
};

export default SignInForm;
