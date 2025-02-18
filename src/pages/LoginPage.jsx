import React from "react";
import LoginBackground from "../components/LoginBackground";
import LoginBox from "../components/LoginBox";
import "../styles/global.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginBackground />
      <LoginBox />
    </div>
  );
};

export default LoginPage;
