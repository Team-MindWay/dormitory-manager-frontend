import React, { useState } from "react";
import "../styles/FindPasswordStep1Box.css";
import { useNavigate } from "react-router-dom";

const FindPasswordStep1Box = () => {
  const go = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="FindPassword-box">
      <div className="title">
        <span className="logo-text">DOMA</span>비밀번호 바꾸기
      </div>

      <form className="form-box">
        <div className="id-box">
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

      <button className="Button" onClick={() => go("/findpasswordstep2")}>
        다음
      </button>
    </div>
  );
};

export default FindPasswordStep1Box;
