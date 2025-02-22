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
          <label htmlFor="id" className="id-text">
            아이디
          </label>
          <input
            type="id"
            placeholder="아이디를 입력해주세요."
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="password-text">
            비밀번호
          </label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button className="signin-button">로그인</button>
      <div className="find-box">
        <p className="find-id">아이디 찾기</p> |{" "}
        <p className="find-password">비밀번호 찾기</p>
      </div>
    </div>
  );
};

export default SigniBox;
