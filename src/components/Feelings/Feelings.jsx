import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {
  const [feeling, setFeeling] = useState("");

  const dispatch = useDispatch();
  const history = useHistory()
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_FEELING",
      payload: { feeling },
    });
    setFeeling("");
    history.push("/understanding");
  };

  return (
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => setFeeling(event.target.value)} required placeholder="Feelings" type="text" />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Feelings;
