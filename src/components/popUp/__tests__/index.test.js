import React from "react";
import PopUp from "../index";
import renderer from "react-test-renderer";
import { Forum } from "../../../pages/desafios/helper";

describe("PopUp Test", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PopUp object={Forum} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
