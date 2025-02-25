import React from "react";
import LoginBackground from "../components/LoginBackground";
import { SigninBox } from "../components/Auth";
import "../styles/global.css";

export default function SigninPage() {
  return (
    <div className="signin-page">
      <LoginBackground />
      <SigninBox />
    </div>
  );
}
