import axios from "axios";
import React from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
  const feelings = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportReducer);
  const comments = useSelector((store) => store.commentReducer);

  const history = useHistory();
  const onSubmit = () => {
    axios
      .post("/feedback", { feelings, understanding, support, comments })
      .then((response) => {
        console.log("POST response = ", response);
        history.push("/success");
      })
      .catch((error) => {
        console.log("POST ERROR", error);
      });
  };
  console.log("what is feelings", feelings);
  return (
    <>
      <h1>Review Your Feedback</h1>

      <div>
        <ul>
          <li>Feeling: {feelings}</li>
          <li>Understanding: {understanding}</li>
          <li>Support: {support}</li>
          <li>Comments: {comments}</li>
        </ul>
      </div>
      <button onClick={onSubmit} type="submit">
        Submit
      </button>
    </>
  );
}

export default Review;
