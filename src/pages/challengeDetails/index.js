import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "../../assets/images/avatar.jpeg";
import IA from "../../assets/images/IA.jpeg";
import axios from "axios";
import { Button, Input, Modal } from "antd";
import { FolderOutlined } from "@ant-design/icons";

import { Header, UserImage, IaImage, ChallengeDiv } from "./style";

const ChallengeDetails = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState();
  const { TextArea } = Input;

  const handleGetChallenge = () => {
    console.log("aqui", id);
    axios
      .get(`https://provi-hack-api.herokuapp.com/api/v1/challenges/${id}`)
      .then((res) => {
        setChallenge(res);
      })
      .catch(() => {
        console.log("Request error");
      });
  };

  useEffect(() => {
    handleGetChallenge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function success() {
    Modal.success({
      content: "Feliz em ter você aqui você está submetido a avaliação!",
    });
  }

  console.log(id, challenge);
  return (
    <div>
      <Header>
        <div>
          <span>Meus desafios</span>
          <UserImage src={Avatar} />
        </div>
      </Header>
      <div>
        {challenge ? (
          <ChallengeDiv>
            <div style={{ width: "50%" }}>
              <IaImage src={IA} />
            </div>
            <div style={{ width: "50%", paddingTop: "1%" }}>
              <h1>{challenge.data.name}</h1>
              <p>{challenge.data.description}</p>
              <div style={{ display: "flex", padding: "5%" }}>
                <FolderOutlined
                  style={{ fontSize: "25px", marginRight: "10px" }}
                />
                <Input placeholder="Respositório GitHub/GitLab" />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <TextArea rows={4} placeholder="Descreva sobre seu projeto" />
                <Button
                  size="large"
                  style={{ marginTop: "20px" }}
                  onClick={success}
                  type="primary"
                  block
                >
                  Enviar
                </Button>
              </div>
              <div />
            </div>
          </ChallengeDiv>
        ) : (
          <div>Aguarde</div>
        )}
      </div>
    </div>
  );
};

export default ChallengeDetails;
