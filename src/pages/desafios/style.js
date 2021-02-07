import styled from "styled-components";
import { Button } from "antd";

export const Main = styled.div`
  margin: 0;
`;

export const Header = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap");
  font-family: "Roboto", sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5%;
  padding-bottom: 5%;
  align-items: center;

  span {
    margin-right: 10px;
  }
`;

export const Challenges = styled.div`
  padding-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const NewButton = styled(Button)`
  margin-left: 10px;
`;

export const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #c4c4c4;
  padding: 1%;
  margin-left: 10%;
`;

export const Message = styled.div`
  font-size: 25px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin-left: 5%;
    padding: 15%;
  }
`;

export const ContainerPopup = styled.div`
  position: -webkit-sticky;
  position: sticky;
  height: 50%;
  top: 40px;
`;
