import React from "react";

function DisplayTitle({ results, setTitle }) {
  return (
    <div className="displayResults">
      {results.map((result, index) => (
        <div
          onClick={() => setTitle(result)}
          key={index}
          className="displayResult"
        >
          {result.title}
        </div>
      ))}
    </div>
  );
}

export default DisplayTitle;
