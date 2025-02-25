import React from "react";
import LoginBackground from "../components/LoginBackground";
import { SignupBox } from "../components/Auth";
const SignupPage = () => {
  return (
    <div className="signup-page">
      <LoginBackground />
      <SignupBox />
    </div>
  );
};

export default SignupPage;
