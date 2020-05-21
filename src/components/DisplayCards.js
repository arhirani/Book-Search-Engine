import React from "react";
import DisplayCard from "./DisplayCard";

function DisplayCards({ list }) {
  return (
    <div className="card">
      {list.length ? (
        list.map((l, i) => <DisplayCard key={i} {...{ l }} />)
      ) : (
        <div
          style={{
            background: "white",
            width: "100%",
            textAlign: "center",
            color: "grey",
          }}
        >
          No Books Selected
        </div>
      )}
    </div>
  );
}

export default DisplayCards;
