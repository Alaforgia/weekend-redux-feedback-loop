import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Support() {
  const [support, setSupport] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_SUPPORT",
      payload: { support },
    });
    setSupport("");
    history.push("/comments");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => setSupport(event.target.value)} required placeholder="Support" type="text" />
        <button type="submit">Next</button>
      </form>
    </>
  );
}

export default Support;
