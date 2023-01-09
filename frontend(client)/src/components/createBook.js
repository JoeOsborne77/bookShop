import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import errorHandlerEmail from "../errorHandling/errorHandlerEmail";
// import errorHandlerUsersName from "../errorHandling/errorHandlerUsersName";
// import errorHandlerPassword from "../errorHandling/errorHandlerPassword";
// import { storage } from "../../firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";
// import "./SignUpForm.css";

const CreateBook = ({ navigate }) => {
  const [title, setTitle] = useState("");
  const [author_id, setAuthorID] = useState("");
  const [published, setPublished] = useState("");
  const [tags, setTags] = useState("");

  const HandleSubmit = async (event) => {
    useEffect(() => {
      axios.post("http://localhost:3001/books").then((response) => {});
    }, []);
    event.preventDefault();

    await fetch("/books", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: title,
        author_id: author_id,
        published: published,
        tags: tags,
      }),
    }).then((response) => {
      response.json();
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorIDChange = (event) => {
    setAuthorID(event.target.value);
  };

  const handlePublishedChange = (event) => {
    setPublished(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  return (
    <form onSubmit={HandleSubmit}>
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
          placeholder="Year Of Publication"
          id="title"
          type="text"
          value={published}
          onChange={handlePublishedChange}
        />{" "}
        <br></br>
        <input
          placeholder="#tags"
          id="title"
          type="text"
          value={tags}
          onChange={handleTagsChange}
        />
        <br></br>
        <input
          placeholder="Author_ID"
          id="author_id"
          type="author_id"
          value={author_id}
          onChange={handleAuthorIDChange}
        />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateBook;
