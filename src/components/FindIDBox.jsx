import React, { useState } from "react";
import "../styles/FindIDBox.css";

const FindIDBox = ({ userid }) => {
  const [isFound, setIsFound] = useState(false);

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onBtn = () => {
    if (!name.trim() || !password.trim()) {
    } else {
      setIsFound(true);
    }
  };

  return (
    <div className="FindID-box">
      <div className="title">
        <span className="logo-text">DOMA</span>아이디 찾기
      </div>

      {isFound ? (
        <div className="result-box">
          <p className="findid-text">
            {name}님의 아이디는 <p className="findid">{userid}</p>입니다.
          </p>
        </div>
      ) : (
        <form className="form-box">
          <div className="password-box">
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

          <div className="name-box">
            <label htmlFor="name" className="name-text">
              이름
            </label>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      )}
      <button className="Button" onClick={onBtn}>
        {isFound ? "돌아가기" : "찾기"}
      </button>
    </div>
  );
};

export default FindIDBox;
