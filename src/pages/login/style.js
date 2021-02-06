import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap");
  font-family: "Roboto", sans-serif;
  display: flex;
  padding: 10%;
  align-items: center;

  div {
    width: 90%;
  }
`;
export const Image = styled.img`
  height: 390px;
  width: 400px;
`;

export const NewInput = styled(Input)`
  background-color: #c4c4c4;
`;
