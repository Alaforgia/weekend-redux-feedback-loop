import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Comments() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      payload: { comment },
    });
    setComment("");
    history.push("/review");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => setComment(event.target.value)} required placeholder="Comments?" type="text" />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Comments;
