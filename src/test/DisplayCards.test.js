import React from "react";
import { render } from "@testing-library/react";
import DisplayCards from "../components/DisplayCards";

describe("#DisplayCards", () => {
  it("should render with values when one item is given", () => {
    let list = [
      { title: "demoTitle", author: "demoAuthor", summary: "demoSummary" },
    ];
    const { container } = render(<DisplayCards list={list} />);
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
  it("should render with no values", () => {
    const { getByText, container } = render(<DisplayCards list={[]} />);
    expect(container.querySelector(".cardTitle")).toBeNull();
    expect(getByText("No Books Selected")).toBeInTheDocument();
  });
  it("should render with values for multiple items", () => {
    let list = [
      { title: "demoTitle", author: "demoAuthor", summary: "demoSummary" },
      { title: "demoTitle1", author: "demoAuthor1", summary: "demoSummary1" },
    ];
    const { container } = render(<DisplayCards key={1} list={list} />);

    expect(container.querySelector(".card").children.length).toEqual(2);

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
