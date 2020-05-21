import React from "react";
import { render } from "@testing-library/react";
import DisplayTitles from "../components/DisplayTitles";

describe("#DisplayTitles", () => {
  it("should render with values when title is provided", () => {
    let displayTitle = {
      inputQuery: null,
      query: "is your problems",
      onQueryChange: () => "is your",
      results: [{ title: "SampleTitle" }],
      setTitle: () => "SampleTitle",
      display: true,
    };
    const { container } = render(<DisplayTitles {...{ ...displayTitle }} />);
    expect(container.querySelector(".displayResults").textContent).toEqual(
      "SampleTitle"
    );
  });
  it("should render empty string when given no value", () => {
    let displayTitle = {
      inputQuery: null,
      query: "is your problems",
      onQueryChange: () => "is your",
      results: [],
      setTitle: () => "SampleTitle",
      display: true,
    };
    const { container } = render(<DisplayTitles {...{ ...displayTitle }} />);
    expect(container.querySelector(".displayResults").textContent).toEqual("");
  });
  it("should render with multiple items when results has multiple items", () => {
    let displayTitle = {
      inputQuery: null,
      query: "is your problems",
      onQueryChange: () => "is your",
      results: [{ title: "SampleTitle1" }, { title: "SampleTitle2" }],
      setTitle: () => "SampleTitle",
      display: true,
    };
    const { container } = render(<DisplayTitles {...{ ...displayTitle }} />);
    expect(container.querySelector(".displayResults").textContent).toEqual(
      "SampleTitle1SampleTitle2"
    );
  });
});
