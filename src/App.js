import React, { useState, useRef, useMemo } from "react";
import ListItems from "./ListItems";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userInput = inputRef.current.value;
    if (userInput === "") return;
    setItems((preItems) => {
      return [...preItems, userInput];
    });
    inputRef.current.value = null;
  };

  return (
    <>
      Search:{" "}
      <input
        type="search"
        className="mb l-font"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <form onSubmit={onSubmit}>
        <label>
          New Item: <input ref={inputRef} type="text" className="mr l-font" />
        </label>
        <button type="submit" className="l-font">
          Add Item
        </button>
      </form>
      <h1>List Items</h1>
      <ListItems items={filteredItems} />
    </>
  );
}

export default App;
