import React from "react";
import Hack from "../../assets/images/hack.png";
import Logo from "../../assets/images/logo.png";
import ImageHome from "../../assets/images/mulherHome.jpeg";

import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Buttons,
  NewButton,
  Content,
  Description,
  Image,
  LogoHW,
} from "./style";

const Home = () => {
  return (
    <Container>
      <Nav>
        <LogoHW src={Logo} />
        <Buttons>
          <NewButton>Cadastre-se</NewButton>
          <NewButton type="primary">
            <Link to="/login">Login</Link>
          </NewButton>
        </Buttons>
      </Nav>
      <Content>
        <Image src={ImageHome} alt="hackathon" />
        {/* <img
          src={BackImag}
          alt=""
          style={{
            position: "absolute",
            width: "444.87px",
            height: " 620.72px",
            left: "451.34px",
            top: "339.76px",
          }}  />*/}

        <Description>
          No HACKHAWORK, você escolhe o desafio, acumula experiência e ainda
          pode aprender muito mais com as empresas parceiras!
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
