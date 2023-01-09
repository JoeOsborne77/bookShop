import React, { useState } from "react";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author_id, setAuthorID] = useState("");
  const [published, setPublished] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmitBook = async (event) => {
    // event.preventDefault();

    let response = await fetch("/posts", {
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
    });
    let data = await response.json();
    setTitle("");
  };

  return (
    <>
      <form id="submit-post-form" onSubmit={handleSubmitBook}>
        <b>
          <label id="Create-a-book-label">
            Create a book, you filthy animal
          </label>
        </b>
        <div>
          <textarea
            placeholder="Enter Book Title"
            id="message"
            value={title}
            onChange={setTitle}
          />
        </div>
        <div>
          <textarea
            placeholder="Enter Author ID"
            id="message"
            value={author_id}
            onChange={setAuthorID}
          />
        </div>
        <div>
          <textarea
            placeholder="Enter Year Of Publication"
            id="message"
            value={published}
            onChange={setPublished}
          />
        </div>
        <textarea
          placeholder="Enter Tags"
          id="message"
          value={tags}
          onChange={setTags}
        />

        <div id="message-button-container">
          <input
            class="message-button"
            id="submit"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default CreateBook;
