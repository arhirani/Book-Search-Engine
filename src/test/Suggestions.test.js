import React from "react";
import { render } from "@testing-library/react";
import Suggestions from "../components/Suggestions";

describe("#Suggestions", () => {
  it("should render suggestions based on count given", () => {
    let suggestions = 10;
    let onSuggestionsChange = () => 5;
    const { container } = render(
      <Suggestions {...{ suggestions, onSuggestionsChange }} />
    );
    expect(container.querySelector(".suggestions").children[1].value).toEqual(
      "10"
    );
  });
});
