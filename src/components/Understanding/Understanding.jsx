import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding() {
  const [understanding, setUnderstanding] = useState("");
  const dispatch = useDispatch();
  onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: { understanding },
    });
    setUnderstanding("");
    // history.push("/");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => setFeeling(event.target.value)} required placeholder="Understanding?" type="text" />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Understanding;
