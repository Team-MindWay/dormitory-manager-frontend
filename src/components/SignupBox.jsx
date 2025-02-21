import { useState } from "react";
import "../styles/SignupBox.css";

const SignupBox = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="Signup-box">
      <div className="title">
        <span className="logo-text">DOMA</span>회원가입
      </div>
      <form className="form-box">
        <div className="input-container">
          <span className="id-text">아이디</span>
          <input
            type="text"
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

        <div className="input-container">
          <span className="checkpassword-text">비밀번호 확인</span>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            value={checkpassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </div>

        <div className="input-container">
          <span className="name-text">이름</span>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      <button className="Signup-button">회원가입</button>
    </div>
  );
};

export default SignupBox;
