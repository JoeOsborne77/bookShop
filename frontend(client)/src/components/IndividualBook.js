import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function IndividualBook() {
  let { id } = useParams();
  const [bookObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/books/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, []);

  const deleteBook = (id) => {
    axios.delete(`http://localhost:3001/books/byId/${id}`);
  };

  return (
    <div className="bookPage">
      <div>{bookObject.title}</div>
      <div>
        <button
          onClick={() => {
            deleteBook(bookObject.id);
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
