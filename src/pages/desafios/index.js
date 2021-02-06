import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Input, Button } from "antd";
import { Header, Nav, NewButton } from "./style";

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
    </div>
  );
};

export default Desafios;
