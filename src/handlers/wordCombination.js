/**
 * Find all word combinations with their relevancy of the given query
 * @param {String} query The query to Search for
 * @return {Object}      Relevancy of all possible combinations of words in the query
 */

let wordCombination = (query) => {
  const queryArr = query.split(" ");
  let relevance = queryArr.reduce(
    (acc, curr, index, queryArr) => relevancy(acc, index, queryArr),
    {}
  );
  return relevance;
};

/**
 * Find all word combinations starting from each index
 * @param {Object} relevance
 * @param {Number} index
 * @param {Array} arr
 * @return {Object} relevancy of all combinations of word starting from each index
 */

let relevancy = (relevance, index, arr) => {
  let word,
    len = arr.length,
    rel = relevance;

  for (let i = index; i < len; i++) {
    word = word ? `${word} ${arr[i]}` : arr[i];
    rel[word] = probability(i - index + 1, len);
  }
  return rel;
};

/**
 * Find the probability of word/combination of occuring in a sentence
 * @param {number} index
 * @param {number} len
 * @return {number} probability
 */

let probability = (index, len) => 100 / (len - index + 1);

export { wordCombination };
