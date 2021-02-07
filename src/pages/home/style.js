import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap");
  font-family: "Roboto", sans-serif;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5%;
  align-items: center;
`;
export const Buttons = styled.div``;

export const NewButton = styled(Button)`
  width: 120px;
  margin-left: 10px;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-left: 10%;
`;
export const Description = styled.p`
  width: 40%;
  font-size: 20px;
  text-align: center;
  margin-right: 100px;
`;
export const Image = styled.img`
  width: 480x;
  height: 390px;
  border-radius: 10px;
`;

export const LogoHW = styled.img`
  width: 300px;
  height: 300px;
  margin-top: -100px;
  margin-left: 58px;
`;
