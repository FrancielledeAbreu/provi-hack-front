import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Input, Button, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";

//locals
import PopUp from "../../components/popUp";
import CardChallenge from "../../components/challenge";
import { Forum, Eventos } from "./helper";
import {
  challengesRequest,
  challengesRequestTeam,
  challengesRequestSingle,
  challengesRequestFilterName,
} from "../../redux/actions/challenges";

//style
import {
  Header,
  Nav,
  NewButton,
  Challenges,
  Message,
  ContainerPopup,
} from "./style";

const Desafios = () => {
  const dispatch = useDispatch();
  const challenges = useSelector((state) => state.challengeReducer);
  const { Search } = Input;

  useEffect(() => {
    dispatch(challengesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChallengesAll = () => {
    dispatch(challengesRequest());
  };

  const handleFilterTeam = () => {
    dispatch(challengesRequestTeam());
  };

  const handleFilterSingle = () => {
    dispatch(challengesRequestSingle());
  };

  const onSearch = (value) => {
    dispatch(challengesRequestFilterName(value));
  };

  return (
    <div data-testid="Challenges">
      <Header>
        <NewButton>sou uma empresa parceira</NewButton>
        <div>
          <span>Meus desafios</span>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
      </Header>
      <Nav>
        <Button onClick={handleFilterTeam} type="primary">
          Desafio em grupo
        </Button>
        <Button onClick={handleFilterSingle} type="primary">
          Desafio individual
        </Button>
        <Search
          placeholder="buscar um desafio"
          onSearch={onSearch}
          enterButton
          style={{ width: "30%" }}
        />
      </Nav>
      <Challenges>
        <div>
          {challenges.length > 0 ? (
            challenges.map(({ name, challenges_type, image, level }, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                style={{ padding: "2%", marginLeft: "8%" }}
              >
                <CardChallenge
                  name={name}
                  challenges_type={challenges_type}
                  image={image}
                  level={level}
                />
              </motion.div>
            ))
          ) : (
            <Message>
              <div>Não existe desafio para este filtro</div>
              <Button onClick={handleChallengesAll} type="primary">
                Todos Desafios
              </Button>
            </Message>
          )}
        </div>
        <ContainerPopup>
          <PopUp object={Forum} />
          <PopUp object={Eventos} />
        </ContainerPopup>
      </Challenges>
    </div>
  );
};

export default Desafios;
