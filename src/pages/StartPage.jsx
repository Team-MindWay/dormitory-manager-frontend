import React from "react";
import { LoginBackground } from "../components/Common";
import "../styles/global.css";
import { StartBox } from "../components/Auth";
const LoginPage = () => {
  return (
    <div className="start-page">
      <LoginBackground />
      <StartBox />
    </div>
  );
};

export default LoginPage;
