import React from "react";
import "./LoginPage.css";
import LoginForm from "../LoginForm/LoginForm";

const SignIn = () => {
  return (
    <div className="container">
      <LoginForm />
      <p className="sign-up">
        Don’t have an account? <span>Sign up</span>
      </p>
    </div>
  );
};

export default SignIn;
