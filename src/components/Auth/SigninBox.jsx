import React, { useState } from "react";
import "../../styles/SigninBox.css";
import { useNavigate } from "react-router-dom";

const SigniBox = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const go = useNavigate();

  // 로그인 버튼 클릭 시 홈 화면으로 이동
  const handleLogin = () => {
    // 실제 로그인 기능이 추가될 경우, 로그인 검증 후 이동하도록 변경 가능
    go("/home"); // "/home" 경로로 이동 (홈 화면 경로에 맞게 수정)
  };

  return (
    <div className="signin-box">
      <div className="title" onClick={() => go(-1)} style={{ cursor: "pointer" }}>
        <span className="logo-text">DOMA</span> 로그인
      </div>
      <form className="form-box">
        <div className="input-container">
          <label htmlFor="id" className="id-text">아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="password-text">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      {/* 로그인 버튼 클릭 시 홈 화면으로 이동 */}
      <button className="signin-button" onClick={handleLogin}>
        로그인
      </button>
      <div className="find-box">
        <p className="find-id" onClick={() => go("/findid")}>아이디 찾기</p> |{" "}
        <p className="find-password" onClick={() => go("/findpasswordstep1")}>비밀번호 찾기</p>
      </div>
    </div>
  );
};

export default SigniBox;
