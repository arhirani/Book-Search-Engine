import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBooks from "../components/SearchBooks";

describe("#SearchBooks", () => {
  it("should render just homepage when there's no value", () => {
    const { container } = render(<SearchBooks />);
    expect(container.firstChild.className).toEqual("SearchEngine");
    expect(container.querySelector(".searchInput").value).toEqual("");
    expect(container.querySelector(".suggestions").children[1].value).toEqual(
      "10"
    );
  });
  it("should render input when input value is given", () => {
    const { container } = render(<SearchBooks />);

    expect(container.firstChild.className).toEqual("SearchEngine");

    expect(container.querySelector(".searchInput").value).toEqual("");

    fireEvent.change(container.querySelector(".searchInput"), {
      target: { value: "is" },
    });
    expect(container.querySelector(".searchInput").value).toEqual("is");
  });
});
