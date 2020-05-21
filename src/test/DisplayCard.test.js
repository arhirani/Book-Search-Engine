import React from "react";
import { render } from "@testing-library/react";
import DisplayCard from "../components/DisplayCard";

describe("#DisplayCard", () => {
  it("should render output for given object", () => {
    const l = {
      author: "demoAuthor",
      title: "demoTitle",
      summary: "demoSummary",
    };
    const { container } = render(<DisplayCard l={l} i={1} />);
    expect(container.querySelector(".cardTitle").textContent).toEqual(
      "demoTitle"
    );
    expect(container.querySelector(".cardAuthor").textContent).toEqual(
      "demoAuthor"
    );
    expect(container.querySelector(".cardSummary").textContent).toEqual(
      "demoSummary"
    );
  });
});
