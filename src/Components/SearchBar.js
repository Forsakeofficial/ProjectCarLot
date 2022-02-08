import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ getUserWordFunc}) => {
  const [word, setWord] = useState("");

  const userTypedText = (e) => {
    setWord(e.target.value);
  };

  const userClickedButton = () => {
    getUserWordFunc(word);
  };

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl
        placeholder="Prosze wpisać marke lub model samochodu..."
        onChange={userTypedText}
        onSelect={userClickedButton}
        value={word}
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={userClickedButton}>
          Szukaj
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;