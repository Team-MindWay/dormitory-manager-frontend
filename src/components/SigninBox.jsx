import React, { useState } from "react";
import "../styles/SigninBox.css";

const SigniBox = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-box">
      <div className="title">
        <span className="logo-text">DOMA</span>로그인
      </div>
      <form className="form-box">
        <div className="input-container">
          <span className="id-text">아이디</span>
          <input
            type="id"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="input-container">
          <span className="password-text">비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button className="signin-button">로그인</button>
      <div className="find-box">
        <p>아이디 찾기</p> | <p>비밀번호 찾기</p>
      </div>
    </div>
  );
};

export default SigniBox;
