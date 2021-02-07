import React from "react";
import CardChallenge from "../index";
import renderer from "react-test-renderer";

describe("CardChallenge Test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CardChallenge
          name="Front-end"
          challenges_type="single"
          image="https://image.freepik.com/fotos-gratis/ilustracao-da-palavra-da-imagem_93826-815.jpg"
          level="medium"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
