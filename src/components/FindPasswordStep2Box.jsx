import React, { useState } from "react";
import "../styles/FindPasswordStep2Box.css";
import { useNavigate } from "react-router-dom";

const FindPasswordStep2Box = () => {
  const go = useNavigate();

  const [isFound, setIsFound] = useState(false);

  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");

  const onBtn = () => {
    if (!password.trim() || !checkpassword.trim()) {
      return;
    }

    if (isFound) {
      go("/signin");
    } else {
      setIsFound(true);
    }
  };

  return (
    <div className="FindPassword-box">
      <div className="title">
        <span className="logo-text">DOMA</span>비밀번호 바꾸기
      </div>

      {isFound ? (
        <div className="result-container">
          <span className="result-text">
            정상적으로 비밀번호가 설정되었습니다.
          </span>
        </div>
      ) : (
        <form className="form-box">
          <div className="password-box">
            <label htmlFor="password" className="password-text">
              비밀번호 재설정
            </label>
            <input
              type="password"
              placeholder="비밀번호를 재설정 해주세요."
              id="passwrod"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="checkpassword-box">
            <label htmlFor="CheckPassword" className="checkpassword-text">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              id="CheckPassword"
              value={checkpassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
        </form>
      )}

      <button className="Button" onClick={onBtn}>
        {isFound ? "돌아가기" : "바꾸기"}
      </button>
    </div>
  );
};

export default FindPasswordStep2Box;
