import React, { useState } from "react";
import { Form, Button, Input, notification, Menu, Layout } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//locals
import LoginImage from "../../assets/images/login.jpg";
import { isValidUser } from "../../redux/actions/login";

//style
import { Container, Image } from "./style";

const Login = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const history = useHistory();
  const { Header } = Layout;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    dispatch(isValidUser(values));

    if (user.validLogin.length === 0) {
      setError(true);
      console.log(error);
      setTimeout(() => {
        notification.error({
          message: "Login inválido",
        });
      }, 3000);
    } else {
      history.push("/desafios");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        <Image src={LoginImage} alt="hackathon" />
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
                { required: true, message: "Por favor insira seu email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: "Por favor insira sua senha!" },
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
