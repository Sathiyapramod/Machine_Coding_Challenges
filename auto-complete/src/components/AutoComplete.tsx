import React, { useRef } from "react";
import useAutocompleteOffline from "../hooks/useAutocompleteOffline";
import { countries } from "../config/suggestionList";

function AutoComplete(): React.ReactNode {
  const userInputRef = useRef<HTMLInputElement>(null);

  const {
    handleInput,
    userText,
    suggestions,
    suggestionFocus,
    handleKeyDown,
    handleClick,
    handleSuggestionFocus,
  } = useAutocompleteOffline(countries);

  console.log("@@sugg", suggestions);

  return (
    <div>
      <p>Use up & down arrows to navigate suggestions</p>
      <input
        type="text"
        ref={userInputRef}
        autoComplete="off"
        spellCheck="false"
        aria-label="search"
        placeholder="Search for Country"
        role="combobox"
        value={userText}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {suggestions.map((suggestion, index) => {
          return (
            <li
              key={index}
              className={suggestionFocus === index ? "highlight" : ""}
              onClick={() => handleClick(suggestion)}
              onMouseOver={() => handleSuggestionFocus(index)}
              onMouseLeave={() => handleSuggestionFocus(null)}
            >
              {suggestion}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AutoComplete;
