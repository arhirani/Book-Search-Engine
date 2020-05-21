import React, { useState, useEffect, useRef } from "react";
import DisplayTitles from "./DisplayTitles";
import SearchButton from "./SearchButton";
import DisplayCards from "./DisplayCards";
import Suggestions from "./Suggestions";
import { getTitles } from "../handlers/searchUtility";

function SearchBooks() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(10);
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(true);
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const inputQuery = useRef(null);
  let t1 = useRef();

  useEffect(() => {
    inputQuery.current.focus();

    let displayTitles = () => setResults(getTitles(query, suggestions));

    if (query.length > 1) {
      if (t1.current > 0) {
        clearTimeout(t1.current); //Added debouncing
      }
      t1.current = setTimeout(displayTitles, 800); //Debouncing
    }
  }, [query, suggestions]);

  let onQueryChange = (e) => {
    setQuery(e.target.value);
    e.target.value.length <= 1 ? setDisplay(false) : setDisplay(true);
  };

  let onSuggestionsChange = (e) => {
    setSuggestions(e.target.value);
  };

  let setTitle = (result) => {
    setQuery(result.title);
    setResults("");
    setDisplay(false);
    setItem(result);
  };

  let handleSubmit = () => {
    let currentList = [...list];
    let itemLength = Object.keys(item).length;
    const itemExists = !currentList.find((curr) => curr.title === item.title);
    if (itemExists && itemLength) {
      currentList.push(item);
      setList(currentList);
    } else {
      if (!itemLength) alert("No Books found");
      else alert("The book already exists in your list");
    }
    setQuery("");
  };

  return (
    <div className="SearchEngine">
      <h1 className="pageTitle">Unibuddy Books</h1>
      <div className="pageBody">
        <DisplayTitles
          {...{ inputQuery, query, onQueryChange, results, setTitle, display }}
        />
        <SearchButton {...{ query, handleSubmit }} />
      </div>
      <Suggestions {...{ suggestions, onSuggestionsChange }} />
      <DisplayCards {...{ list }} />
    </div>
  );
}

export default SearchBooks;
