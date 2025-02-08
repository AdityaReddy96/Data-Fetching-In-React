//! React Hook Challenge: Dynamic State Management and Document Title Update with useEffect

//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component will include:

//? 1. A counter that increments when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import { useEffect, useState } from "react";
import "./effect.css";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span>{inputValue}</span>
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};
