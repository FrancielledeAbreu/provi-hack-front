import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";
import Hack from "../../assets/images/hack.png";
import { Container, Image, NewInput } from "./style";

import { useDispatch, useSelector } from "react-redux";
import { isValidUser } from "../../redux/actions/login";

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const user = useSelector((state) => state);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    dispatch(isValidUser(values));
    if (user.validLogin && user.validLogin.length === []) {
      setError(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Header } = Layout;
  console.log(user.validLogin, "user", error, "error");
  return (
    <>
      <Layout>
        <Header style={{ padding: "0" }} className="header App-header">
          <Menu
            theme="light"
            mode="horizontal"
            style={{ width: "100%", borderRight: 0 }}
          >
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Container>
        <Image src={Hack} alt="hackathon" />
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Por favor insira seu username!" },
              ]}
            >
              <NewInput />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: "Por favor insira sua sennha!" },
              ]}
            >
              <Input.Password style={{ backgroundColor: "#C4C4C4" }} />
            </Form.Item>

            <Form.Item
              style={{ textAlign: "center" }}
              {...tailLayout}
              name="remember"
              valuePropName="checked"
            >
              {error && <p>Email inválido</p>}
              <Link>Esqueci a senha</Link>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" block>
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
