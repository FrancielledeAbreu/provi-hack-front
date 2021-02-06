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
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10%;
  padding-left: 10%;
`;
export const Description = styled.p`
  width: 60%;
  text-align: center;
`;

export const Image = styled.img``;
