import React, { useState } from "react";
import "../../styles/SigninBox.css";
import { useNavigate } from "react-router-dom";

const SigniBox = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const go = useNavigate();

  // 뒤로 가기 함수
  const handleGoBack = () => {
    const confirmBack = window.confirm("정말 뒤로 넘어가실건가요?");
    if (confirmBack) {
      go(-1); // 사용자가 확인을 누르면 뒤로 가기
    }
  };

  return (
    <div className="signin-box">
      {/* "DOMA 로그인" 전체를 클릭하면 뒤로 가기 알림 */}
      <div className="title" onClick={handleGoBack} style={{ cursor: "pointer" }}>
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
      <button className="signin-button">로그인</button>
      <div className="find-box">
        <p className="find-id" onClick={() => go("/findid")}>아이디 찾기</p> |{" "}
        <p className="find-password" onClick={() => go("/findpasswordstep1")}>비밀번호 찾기</p>
      </div>
    </div>
  );
};

export default SigniBox;
