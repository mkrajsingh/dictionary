import { useState } from "react";
import "./styles.css"
const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const word = search.trim().toLowerCase();
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === word
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <strong>Definition:</strong>
      {result && <p>{result}</p>}
    </>
  );
}

export default App;
