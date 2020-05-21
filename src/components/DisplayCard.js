import React from "react";

function DisplayCard({ l, i }) {
  return (
    <div className="cardResult" key={i}>
      <div className="cardTitle">{l.title}</div>
      <div className="cardAuthor">{l.author}</div>
      <div className="cardSummary">{l.summary}</div>
    </div>
  );
}

export default DisplayCard;
