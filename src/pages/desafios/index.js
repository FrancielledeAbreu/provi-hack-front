import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Input, Button } from "antd";
import { Header, Nav, NewButton, Challanges } from "./style";

import CardChalenge from "../../components/challenge";

const data = [
  {
    name: "Inteligência artificial",
    description: "description",
    level: "medium",
    challenges_type: "team",
    status: "status ",
    image:
      "https://image.freepik.com/psd-gratuitas/maquete-de-logotipo-preto-gravado_125540-223.jpg",
  },
  {
    name: "Ajudando pequenos empreendedores",
    description: "description",
    level: "easy",
    challenges_type: "single",
    status: "status ",
    image:
      "https://image.freepik.com/psd-gratuitas/maquete-de-logotipo-preto-gravado_125540-223.jpg",
  },
  {
    name: "Turismo na pandemia do Covid-19",
    description: "description",
    level: "hard",
    challenges_type: "team",
    status: "status ",
    image:
      "https://image.freepik.com/psd-gratuitas/maquete-de-logotipo-preto-gravado_125540-223.jpg",
  },
];

const Desafios = () => {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  return (
    <div>
      <Header>
        <NewButton>sou uma empresa parceira</NewButton>
        <div>
          <span>Meus desafios</span>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
      </Header>
      <Nav>
        <Button type="primary">Desafio em grupo</Button>
        <Button type="primary">Desafio individual</Button>
        <Search
          placeholder="buscar um desafio"
          onSearch={onSearch}
          enterButton
          style={{ width: "30%" }}
        />
      </Nav>
      <Challanges>
        {data.map(({ name, challenges_type, image, level }, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            style={{ padding: "2%", marginLeft: "8%" }}
          >
            <CardChalenge
              name={name}
              challenges_type={challenges_type}
              image={image}
              level={level}
            />
          </motion.div>
        ))}
      </Challanges>
    </div>
  );
};

export default Desafios;
