import React from "react";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author_id, setAuthorID] = useState("");
  const [published, setPublished] = useState(new Date());
  const [tags, setTags] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorIDChange = (event) => {
    setAuthorID(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const PostData = async (event) => {
    event.preventDefault();
    const data = {
      title: title,
      author_id: author_id,
      published: published,
      tags: tags,
    };
    axios.post("http://localhost:3001/books", data);
  };

  return (
    <form onSubmit={PostData}>
      <h1>Create A Book</h1>
      <label>
        <input
          placeholder="Title"
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <br></br>

        <input
          placeholder="#tags"
          id="tags"
          type="text"
          value={tags}
          onChange={handleTagsChange}
        />
        <br></br>
        <input
          placeholder="Author_ID"
          id="author_id"
          type="number"
          value={author_id}
          onChange={handleAuthorIDChange}
        />
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
