import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function AllBooks() {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((response) => {
      setListOfBooks(response.data);
    });
  }, []);

  const deleteBook = (bookID) => {
    axios.delete(`http://localhost:3001/books/${bookID}`);
  };

  return (
    <div className="App">
      {listOfBooks.map((book) => {
        return (
          <div className="book" key={book.id}>
            <div>{book.title}</div>
            <div>{book.author_id}</div>
            <div>{book.published}</div>
            <div>{book.tags}</div>
            <div>{book.id}</div>

            <button
              onClick={() => {
                deleteBook(book.id);
              }}
            >
              {" "}
              Delete Book
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AllBooks;
