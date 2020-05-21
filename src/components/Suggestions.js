import React from "react";

function Suggestions({ suggestions, onSuggestionsChange }) {
  return (
    <div className="suggestions">
      <label>Suggestions : </label>
      <input
        type="number"
        value={suggestions}
        onChange={onSuggestionsChange}
        style={{ width: 50 }}
      />
    </div>
  );
}

export default Suggestions;
