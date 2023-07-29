import React, { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage/Loginpage";
import Profile from "./components/Profile/Profile";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./App.css";

const App = () => {
  const log = useSelector((state) => state.log.status);

  return (
    <div className="App">
      <div className="bg-img">{log ? <Profile /> : <LoginPage />}</div>
    </div>
  );
};

export default App;
