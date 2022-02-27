import React from "react";
import { useHistory } from "react-router-dom";
function Success() {
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <>
      <h2>Thanks!</h2>
      <button onClick={onSubmit}>Leave New Feedback</button>
    </>
  );
}

export default Success;
