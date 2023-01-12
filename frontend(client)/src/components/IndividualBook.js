import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function IndividualBook() {
  const [bookById, setBookById] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/books/${id}`).then((response) => {
      setBookById(response.data);
    });
  }, [id]);

  const deleteBook = () => {
    console.log("bookById:", bookById);
    // axios.delete(`http://localhost:3001/books/${bookById.id}}`);
  };

  return (
    <div className="App">
      <div className="book">
        <div>{bookById.title}</div>
        <div>{bookById.author_id}</div>
        <div>{bookById.published}</div>
        <div>{bookById.tags}</div>
        <div>{bookById.id}</div>

        <button onClick={deleteBook}> Delete Book</button>
      </div>
    </div>
  );
}

export default IndividualBook;
