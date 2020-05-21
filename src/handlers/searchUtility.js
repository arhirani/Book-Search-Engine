import data from "../json/data";
import { wordCombination } from "./wordCombination";

let getTitles = (query, k) => {
  let results = searchUtility(query, k);
  for (let i = 0; i < results.length; i++) {
    results[i].title = data.titles[results[i].id];
    results[i].author = data.authors[results[i].id].author;
  }
  return results;
};
/**
 * Main function - Creates word combinations and finds top k summaries that match with the given query
 * @param {String} query
 * @param {Number} k
 * @return {Array}  k summaries that match the given query
 */
let searchUtility = (query, k) => {
  let combinations = wordCombination(query);
  let relevantCombinations = getRelevantCombinations(combinations, k);
  return relevantCombinations;
};

/**
 * Finds the matched combinations, sorts them accoding to the matched percentage
 * @param {Object} combinations
 * @param {Number} k
 * @returns {Array} First k relevant summaries
 */

let getRelevantCombinations = (combinations, k) => {
  let summaries = data.summaries;

  let matchedCombination = summaries.reduce((acc, summaryObj) => {
    let { summary, id } = summaryObj;
    let probability = getProbability(combinations, summary);
    if (probability)
      acc[probability] = { ...acc[probability], ...{ [id]: summary } };
    return acc;
  }, {});

  let sortedCombination = Object.keys(matchedCombination).sort((a, b) => b - a); //sorting matchedCombination by decreasing order of percentage

  let summaryList = getSummaryList(sortedCombination, matchedCombination, k);

  return summaryList;
};

/**
 * Calculates the percentage match of the given query combinations with the summaries
 * @param {Object} combinations
 * @param {String} summary
 * @returns {Number} Match percent of the query
 */
let getProbability = (combinations, summary) => {
  let res = 0;
  for (const [combination, percent] of Object.entries(combinations)) {
    let matchPercent = (summary.match(combination) || []).length;
    let acc = matchPercent * percent;
    res += acc;
  }
  return res;
};

/**
 * Creates a list of first k summaries that match with the given query based on sorted array
 * @param {Array} sortedCombination
 * @param {Object} matchedCombination
 * @param {Number} k
 * @return {Array} First k summaries
 */
let getSummaryList = (sortedCombination, matchedCombination, k) => {
  let count = 0,
    res = [];
  for (let i = 0; i < sortedCombination.length; i++) {
    let index = sortedCombination[i];
    let list = matchedCombination[index];
    for (const [id, summary] of Object.entries(list)) {
      res.push({ id, summary });
      count++;
      if (count >= k) break;
    }
    if (count >= k) break;
  }
  return res;
};

//searchUtility("is your problems", 10);

export {
  searchUtility,
  getRelevantCombinations,
  getProbability,
  getSummaryList,
  getTitles,
};
