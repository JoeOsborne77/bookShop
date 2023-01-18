import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function IndividualBook() {
  const [bookById, setBookById] = useState({});
  let { id } = useParams();
  const [bookObject, setBookObject] = useState({});
  const authorAPIURL = "http://localhost:3001/authors";
  const [listOfAuthors, setListOfAuthors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/books/${id}`).then((response) => {
      setBookById(response.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(authorAPIURL).then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);

  const deleteBook = (bookID) => {
    axios.delete(`http://localhost:3001/books/${bookID}`);
    <Link to="/books"></Link>;
  };

  const editBook = (option, book) => {
    if (option === "title") {
      let newTitle = prompt("Enter New Title:");
      axios.put("http://localhost:3001/books/title", {
        title: newTitle,
        id: book.id,
      });
      setBookObject({ ...bookObject, title: newTitle });
    }
    if (option === "authorID") {
      let newAuthorID = prompt("Enter New Author ID:");
      axios.put("http://localhost:3001/books/authorID", {
        author_id: newAuthorID,
        id: book.id,
      });
      setBookObject({ ...bookObject, author_id: newAuthorID });
    }
    if (option === "published") {
      let newPublicationDate = prompt("Enter New Publication Date:");

      axios.put("http://localhost:3001/books/published", {
        published: newPublicationDate,
        id: book.id,
      });
      setBookObject({ ...bookObject, published: newPublicationDate });
    }
    if (option === "tags") {
      let newTags = prompt("Enter New Tags");

      axios.put("http://localhost:3001/books/tags", {
        tags: newTags,
        id: book.id,
      });
      setBookObject({ ...bookObject, tags: newTags });
    }
  };
  return (
    <div className="App">
      <div className="book">
        <Link to={`/books/${bookById.id}`}>
          Title: {bookById.title}{" "}
          <div
            onClick={() => {
              editBook("title", bookById);
            }}
          >
            🖊️
          </div>
        </Link>
        <Link to={`/authors/${bookById.authorId}`}>
          Author Name:{" "}
          {listOfAuthors.map((author) => {
            return author.id === bookById.authorId ? author.name : null;
          })}{" "}
          <div
            onClick={() => {
              editBook("authorID", bookById);
            }}
          >
            🖊️
          </div>
        </Link>
        <Link to={`/authors/${bookById.authorId}`}>
          Author ID: {bookById.authorId}{" "}
          <div
            onClick={() => {
              editBook("authorID", bookById);
            }}
          >
            🖊️
          </div>
        </Link>
        <Link to={`/books/${bookById.id}`}>
          Publication Date: {bookById.published}{" "}
          <div
            onClick={() => {
              editBook("published", bookById);
            }}
          >
            🖊️
          </div>
        </Link>
        <Link to={`/books/${bookById.id}`}>
          Tags: {bookById.tags}{" "}
          <div
            onClick={() => {
              editBook("tags", bookById);
            }}
          >
            🖊️
          </div>
        </Link>
        <Link to={`/books/${bookById.id}`}>Book ID: {bookById.id}</Link>
        <button
          onClick={() => {
            deleteBook(bookById.id);
          }}
        >
          {" "}
          Delete Book
        </button>
      </div>
    </div>
  );
}

export default IndividualBook;
