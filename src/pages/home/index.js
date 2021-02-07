import React from "react";
import { Link } from "react-router-dom";

//locals
import Logo from "../../assets/images/logo.png";
import ImageHome from "../../assets/images/mulherHome.jpeg";

//style
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
    <Container data-testid="Challenges">
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
        <Description>
          No HACKHAWORK, você escolhe o desafio, acumula experiência e ainda
          pode aprender muito mais com as empresas parceiras!
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
