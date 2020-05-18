import React from "react";
import { searchUtility } from "./handlers/searchUtility";

function App() {
  let query = "is your problems";
  let results = 10;
  console.log(searchUtility(query, results));
  return <div>Please open your console window</div>;
}

export default App;
