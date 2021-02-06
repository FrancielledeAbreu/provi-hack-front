import React from "react";
import { Menu, Layout } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Hack from "../../assets/images/hack.png";
import { Container, Image } from "./style";

const Login = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Header } = Layout;

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
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Por favor insira seu username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: "Por favor insira sua sennha!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              style={{ textAlign: "center" }}
              {...tailLayout}
              name="remember"
              valuePropName="checked"
            >
              {/* <Checkbox>Relembrar me</Checkbox> */}
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
