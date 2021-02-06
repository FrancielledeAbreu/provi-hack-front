import React from "react";
import Hard from "../../assets/images/hard.png";
import Easy from "../../assets/images/easy.png";
import Medium from "../../assets/images/medium.png";
import ImageTeam from "../../assets/images/team.png";
import ImageSingle from "../../assets/images/single.png";
import { Img, Container } from "./style";

const CardChalenge = ({ name, level, challenges_type, image }) => {
  let imageUrl = "";
  switch (level) {
    case "easy":
      imageUrl = Easy;
      break;
    case "hard":
      imageUrl = Hard;
      break;
    case "medium":
      imageUrl = Medium;
      break;
    default:
      imageUrl = Easy;
      break;
  }
  return (
    <Container>
      <Img src={image} alt="" />
      <Img src={imageUrl} alt="" />
      <span>{name}</span>
      {challenges_type === "team" ? (
        <Img src={ImageTeam} alt="" />
      ) : (
        <Img src={ImageSingle} alt="" />
      )}
    </Container>
  );
};

export default CardChalenge;
