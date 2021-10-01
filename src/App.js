import "./styles.css";
import React, { useState } from "react";

const bookDictionary = {
  Programming: [
    { name: "Clean Code", ratings: "4.7/5" },
    { name: "Introduction to Algorithms", ratings: "4.3/5" }
  ],
  Javascript: [
    { name: "Eloquent JavaScript", ratings: "4/5" },
    { name: "JavaScript: The Good Parts", ratings: "3.5/5" }
  ],
  Fiction: [
    { name: "Harry Potter Series", ratings: "5/5" },
    { name: "The Chronicles of Narnia", ratings: "4.5/5" }
  ],
  Novels: [
    { name: "A Rising Man", ratings: "4.7/5" },
    { name: "The Mysterious Affair at Styles", ratings: "4.5/5" }
  ]
};

export default function App() {
  const [books, setbooks] = useState("Programming");

  function clickHandler(genre) {
    setbooks(genre);
  }

  return (
    <div className="App">
      <h1>good books</h1>

      <h3>Books I'd like to read.📚</h3>

      <hr></hr>

      <div>
        {Object.keys(bookDictionary).map((genre) => (
          <button className="btn-genre" onClick={() => clickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {bookDictionary[books].map((book) => (
            <li className="list-non-bullet" key={book.name}>
              <div style={{ fontSize: "bolder" }}>{book.name}</div>
              <div style={{ fontSize: "smaller" }}>{book.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * VISER : View -> Interact -> State in Event Handler -> Render
 */
