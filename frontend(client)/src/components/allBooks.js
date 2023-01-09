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
  return (
    <div className="App">
      {listOfBooks.map((value, key) => {
        return (
          <div className="book">
            <div> {value.title} </div>
            <div>{value.author_id}</div>
            <div>{value.published}</div>
            <div>{value.tags}</div>
            <div>{value.id}</div>
            <div id="message-button-container">
              <input
                class="message-button"
                id="submit"
                type="submit"
                value="Delete"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBooks;
