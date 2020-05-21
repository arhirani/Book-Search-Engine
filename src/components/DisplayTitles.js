import React from "react";
import DisplayTitle from "./DisplayTitle";

function DisplayTitles({
  inputQuery,
  query,
  onQueryChange,
  results,
  setTitle,
  display,
}) {
  return (
    <div className="searchResults">
      <input
        type="text"
        ref={inputQuery}
        value={query}
        className="searchInput"
        onChange={onQueryChange}
        placeholder="Let's Explore"
      />
      {display && results && <DisplayTitle {...{ results, setTitle }} />}
    </div>
  );
}

export default DisplayTitles;
