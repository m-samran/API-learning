import React, { useState, useEffect } from "react";
import "./JsonPlaceholder.css";

import Grid from "../Grid/Grid";
import NewEntry from "../NewEntry/NewEntry";

function JsonPlaceholder() {
  const [currentData, setCurrentData] = useState([]);
  const [currentId, setCurrentId] = useState([]);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [postId, setPostId] = useState();

  useEffect(() => {
    let mounted = true;
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        if (mounted) {
          setCurrentData(json);
        }
      });
    return () => (mounted = false);
  }, []);

  const payload = {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const update = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );
    const data = await response.json();
    console.log("data after successful update", data);
  };
  const remove = async () => {
    let mounted = true;
    if (mounted) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + currentId,
        { method: "DELETE" }
      );
      const data = await response.json();
      console.log("data deleted successfully", data);
    }
  };

  if (currentData.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <NewEntry
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        update={update}
      />
      <div className="grid-call">
        <Grid
          currentData={currentData}
          setCurrentData={setCurrentData}
          setCurrentID={setCurrentId}
          remove={remove}
          setPostId={setPostId}
          postId={postId}
        />
      </div>
    </>
  );
}

export default JsonPlaceholder;
