import React, { useRef, useState } from "react";
import Trie from "../trie";

type AutoCompleteReturnType = {
  userText: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestionFocus: number | null;
  suggestions: string[];
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClick: (selectedSuggestion: string) => void;
  handleSuggestionFocus: (index: number | null) => void;
};

function useAutocompleteOffline(
  suggestionsList: string[]
): AutoCompleteReturnType {
  const suggestionsLength = 5; // by default

  const [userText, setUserText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionFocus, setSuggestionFocus] = useState<number | null>(null);
  const trie = useRef<Trie>(new Trie(suggestionsList));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setUserText(e.target.value);
    setSuggestions(
      text ? trie.current.getWordsFromTrie(text, suggestionsLength) : []
    );
    setSuggestionFocus(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
      setSuggestions([]);
      setSuggestionFocus(null);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSuggestionFocus((prev) => {
        if (prev === null || prev === suggestions.length - 1) return 0;
        else return prev + 1;
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSuggestionFocus((prev) => {
        if (prev === null || prev === setSuggestions.length - 1) return 0;
        else return prev - 1;
      });
    }
  };

  const handleClick = (selectedSuggestion: string) => {
    setUserText(selectedSuggestion);
    setSuggestions([]);
    setSuggestionFocus(null);
  };

  const handleSuggestionFocus = (index: number | null) =>
    setSuggestionFocus(index);

  return {
    userText,
    handleInput,
    suggestions,
    suggestionFocus,
    handleKeyDown,
    handleClick,
    handleSuggestionFocus,
  };
}

export default useAutocompleteOffline;
