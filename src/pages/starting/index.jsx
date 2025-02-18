import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export default function Starting() {
  const go = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <S.Highlight>DOMA</S.Highlight>를 시작해 볼까요?
        </S.Title>
        <S.Button onClick={() => go("/signin")}>로그인</S.Button>
        <S.TextBox>
          <S.Text>
            아직 가입 전이라면?{" "}
            <S.LinkText to="signup">회원가입 하러가기</S.LinkText>{" "}
          </S.Text>
        </S.TextBox>
      </S.Container>
    </S.Wrapper>
  );
}
