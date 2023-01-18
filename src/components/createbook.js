import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, Option } from "../styling/dropDown";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [published, setPublished] = useState(new Date());
  const [tags, setTags] = useState("");
  const [listOfAuthors, setListOfAuthors] = useState([]);
  const [listOfBooks, setListOfBooks] = useState([]);

  const authorAPIURL = "http://localhost:3001/authors";
  const bookAPIURL = "http://localhost:3001/books";

  useEffect(() => {
    axios.get(authorAPIURL).then((response) => {
      setListOfAuthors(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(bookAPIURL).then((response) => {
      setListOfBooks(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const lastBook = listOfBooks[listOfBooks.length - 1];
    listOfAuthors.map(async (auth) => {
      if (auth.name === authorName) {
        await axios.post(bookAPIURL, {
          title,
          tags,
          published,
          authorId: auth.id,
        });
      } else {
        await axios.post(bookAPIURL, {
          title,
          tags,
          published,
          authorId: lastBook.authorId,
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create A Book</h1>
      <label>
        <input
          placeholder="Title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>

        <input
          placeholder="#tags"
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <br></br>
        <Dropdown
          formLabel="Choose a service"
          buttonText="Send form"
          onChange={setAuthorId}
          action="https://jsonplaceholder.typicode.com/posts"
        >
          <Option selected value="Author" />
          <div>
            {listOfAuthors.map((author) => {
              return <Option value={author.name} />;
            })}
          </div>
        </Dropdown>
        {/* <input
          placeholder="Author Name"
          id="author name"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        /> */}
      </label>
      <br></br>
      <DatePicker
        selected={published}
        onChange={(date) => setPublished(date)}
      />

      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateBook;
