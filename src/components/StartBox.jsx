import React from "react";
import "../styles/StartBox.css";

const StartBox = () => {
  return (
    <div className="start-box">
      <div className="title">
        <span className="logo-text">DOMA</span>를 시작해 볼까요?
      </div>

      <button className="login-button">로그인</button>
      <div className="signup-container">
        <p className="signup-text">아직 가입 전이면?</p>
        <p className="signup-link">회원가입 하러가기</p>
      </div>
    </div>
  );
};

export default StartBox;
