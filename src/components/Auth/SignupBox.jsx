import { useState } from "react";
import "../../styles/SignupBox.css";

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
          <label htmlFor="id" className="id-text">
            아이디
          </label>
          <input
            type="text"
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

        <div className="input-container">
          <label htmlFor="checkPassword" className="checkpassword-text">
            비밀번호 확인
          </label>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            id="checkPassword"
            value={checkpassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </div>

        <div className="input-container">
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
      <button className="Signup-button">회원가입</button>
    </div>
  );
};

export default SignupBox;
