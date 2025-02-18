import styled from "styled-components";
import { Link } from "react-router-dom";
import Deco from "../../asset/deco.svg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${Deco});
  background-size: 130%;
  background-position: left bottom;
`;

export const Container = styled.div`
  width: 383px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: 500;
  line-height: 39.94px;
  color: #e0e0e0;
`;

export const Highlight = styled.span`
  font-size: 32px;
  font-weight: 900;
  line-height: 39.94px;
  color: #9ad54a;
`;

export const Button = styled.button`
  width: 383px;
  height: 54px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #2f2f2f;
  gap: 10px;
  color: #e0e0e0;
  font-size: 24px;
  font-weight: 600;
  line-height: 29.65px;
  margin-top: 12px;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const TextBox = styled.div`
  width: 100%;
  text-align: right;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.97px;
  color: #e0e0e0;
`;

export const LinkText = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.97px;
  color: #e0e0e0;
  text-decoration: none;
`;
