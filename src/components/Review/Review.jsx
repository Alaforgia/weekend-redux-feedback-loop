import axios from "axios";
import React from "react";

function Review() {
  const onSubmit = () => {
    axios
      .post("/prime_feedback")
      .then((response) => {
        console.log("POST response = ", response);
      })
      .catch((error) => {
        console.log("POST ERROR", error);
      });
  };
  return (
    <>
      <h1>Review Your Feedback</h1>
      <button onSubmit={onSubmit} type="submit">
        Submit
      </button>
    </>
  );
}

export default Review;
