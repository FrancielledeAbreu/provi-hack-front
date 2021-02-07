import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 15%;
  padding-top: 3%;
  padding-bottom: 3%;
  align-items: center;

  span {
    margin-right: 10px;
  }
`;

export const UserImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50px;
`;
export const IaImage = styled.img`
  width: 480px;
  height: 450px;
  padding-left: 60px;
  border-radius: 20px;
  position: absolute;
`;

export const ChallengeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding-right: 20%;
`;
