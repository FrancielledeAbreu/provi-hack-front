import React from "react";
import Hack from "../../assets/images/hack.png";

import { Link } from "react-router-dom";
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
    <Container>
      <Nav>
        Logo
        <Buttons>
          <NewButton>Cadastre-se</NewButton>
          <NewButton type="primary">
            <Link to="/login">Login</Link>
          </NewButton>
        </Buttons>
      </Nav>
      <Content>
        <Image src={Hack} alt="hackathon" />
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Description>
      </Content>
    </Container>
  );
};

export default Home;
