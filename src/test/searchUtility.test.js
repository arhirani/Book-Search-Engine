import assert from "assert";
import {
  searchUtility,
  getRelevantCombinations,
  getProbability,
  getSummaryList,
} from "../handlers/searchUtility";
import { wordCombination } from "../handlers/wordCombination";
import data from "./mockData.json";
import response from "./mockResponse.json";

describe("#wordCombination()", () => {
  describe("When giving query as param", () => {
    const combination = wordCombination(data.query);
    it("should return combinations", () => {
      assert.equal(
        JSON.stringify(combination),
        JSON.stringify(response.combinations)
      );
    });
  });
});

describe("#getRelevantCombinations()", () => {
  describe("When giving word combinations and k as params", () => {
    const list = getRelevantCombinations(data.combinations, data.maxResults);
    it("should return a list with k relevant results", () => {
      assert.equal(
        JSON.stringify(list),
        JSON.stringify(response.relevantList1)
      );
    });
  });
});

describe("#getSummaryList()", () => {
  describe("When sorted list of matching percentage, matched combination and k are given as params", () => {
    const list = getSummaryList(
      data.sortedCombination,
      data.matchedCombination,
      data.maxResults
    );
    it("should return a sorted list of k relevant summaries", () => {
      assert.equal(JSON.stringify(list), JSON.stringify(response.relevantList));
    });
  });
});

describe("#getProbability()", () => {
  describe("When combination and summary are given as params", () => {
    const percentMatch = getProbability(
      data.combinations,
      data.summaries[1].summary
    );
    it("should return ", () => {
      assert.equal(percentMatch, 66.66666666666667);
    });
  });
});

describe("#searchUtility()", () => {
  describe("When giving query and k as params", () => {
    const list = searchUtility(data.query, data.maxResults);
    it("should return a list with k relevant results", () => {
      assert.equal(
        JSON.stringify(list),
        JSON.stringify(response.relevantList1)
      );
    });
  });
});
