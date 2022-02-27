import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
  const [understanding, setUnderstanding] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: { understanding },
    });
    setUnderstanding("");
    history.push("/support");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(event) => setUnderstanding(event.target.value)}
          required
          placeholder="Understanding?"
          type="text"
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Understanding;
