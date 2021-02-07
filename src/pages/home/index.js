import React from "react";
import { Link } from "react-router-dom";

//locals

import Logo from "../../assets/images/hw.png";

//style
import {
  Container,
  Nav,
  Buttons,
  NewButton,
  Content,
  Description,
  Image,
} from "./style";

const Home = () => {
  return (
    <Container data-testid="Challenges">
      <Nav>
        <Buttons>
          <NewButton>Cadastre-se</NewButton>
          <NewButton type="primary">
            <Link to="/login">Login</Link>
          </NewButton>
        </Buttons>
      </Nav>
      <Content>
        <Image src={Logo} alt="hackathon" />
        <Description>
          No HACKHAWORK, você escolhe o desafio, acumula experiência e ainda
          pode aprender muito mais com as empresas parceiras!
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
