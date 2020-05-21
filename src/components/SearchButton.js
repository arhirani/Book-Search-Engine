import React from "react";

function SearchButton({ query, handleSubmit }) {
  return (
    <div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="searchButton"
        disabled={query.length ? false : true}
      >
        Search
      </button>
    </div>
  );
}

export default SearchButton;
