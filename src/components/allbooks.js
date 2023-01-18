import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function AllBooks() {
  const bookAPIURL = "http://localhost:3001/books";
  const authorAPIURL = "http://localhost:3001/authors";
  const [listOfAuthors, setListOfAuthors] = useState([]);
  const [listOfBooks, setListOfBooks] = useState([]);
  const [bookObject, setBookObject] = useState({});

  useEffect(() => {
    axios.get(bookAPIURL).then((response) => {
      setListOfBooks(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(authorAPIURL).then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);

  const deleteBook = (bookID) => {
    axios.delete(`${bookAPIURL}/${bookID}`);
  };

  const editBook = (option, book) => {
    if (option === "title") {
      let newTitle = prompt("Enter New Title:");
      axios.put(bookAPIURL + "/title", {
        title: newTitle,
        id: book.id,
      });
      setBookObject({ ...bookObject, title: newTitle });
    }
    if (option === "authorID") {
      let newAuthorID = prompt("Enter New Author ID:");
      axios.put(bookAPIURL + "/authorID", {
        author_id: newAuthorID,
        id: book.id,
      });
      setBookObject({ ...bookObject, author_id: newAuthorID });
    }
    if (option === "published") {
      let newPublicationDate = prompt("Enter New Publication Date:");

      axios.put(bookAPIURL + "/published", {
        published: newPublicationDate,
        id: book.id,
      });
      setBookObject({ ...bookObject, published: newPublicationDate });
    }
    if (option === "tags") {
      let newTags = prompt("Enter New Tags");

      axios.put(bookAPIURL + "/tags", {
        tags: newTags,
        id: book.id,
      });
      setBookObject({ ...bookObject, tags: newTags });
    }
  };

  return (
    <div className="allbooks">
      {listOfBooks.map((book) => {
        return (
          <div className="book" key={book.id}>
            <Link to={`/books/${book.id}`}>
              Title: {book.title}{" "}
              <div
                onClick={() => {
                  editBook("title", book);
                }}
              >
                🖊️
              </div>
            </Link>

            <Link to={`/books/${book.id}`}>
              Author ID: {book.authorId}{" "}
              <div
                onClick={() => {
                  editBook("authorID", book);
                }}
              >
                🖊️
              </div>
            </Link>
            <Link to={`/books/${book.id}`}>
              Author Name:{" "}
              {listOfAuthors.map((author) => {
                return author.id === book.authorId ? author.name : null;
              })}{" "}
              <div
                onClick={() => {
                  editBook("authorID", book);
                }}
              >
                🖊️
              </div>
            </Link>
            <Link to={`/books/${book.id}`}>
              Publication Date: {book.published}{" "}
              <div
                onClick={() => {
                  editBook("published", book);
                }}
              >
                🖊️
              </div>
            </Link>
            <Link to={`/books/${book.id}`}>
              Tags: {book.tags}{" "}
              <div
                onClick={() => {
                  editBook("tags", book);
                }}
              >
                🖊️
              </div>
            </Link>
            <Link to={`/books/${book.id}`}>Book ID: {book.id}</Link>
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
