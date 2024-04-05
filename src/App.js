import React, { useState } from 'react';
import "./styles.css"

const dictionaryData = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
  { word: "raj", meaning: "mithilesh kumar." },
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const lowercaseTerm = searchTerm.toLowerCase();
    const foundWord = dictionaryData.find(item => item.word.toLowerCase() === lowercaseTerm);

    if (foundWord) {
      setSearchResult(`Defination: \n${foundWord.meaning}`); // Format as per requirement
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress} // Handle Enter key press
        placeholder="Enter search term"
        className="input-field" // Apply custom class
      />
      <button onClick={handleSearch} className="button">Search</button>
      {searchResult && (
        <div className="result">
          {searchResult.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default XDictionary;
