import axios from "axios";
import React from "react";
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Support from "../App/Support/Support";
import Comments from "../App/Comments/Comments";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import feedbackReducers from "../..";
// import { useSelector } from "react-redux";

function Review() {
  //   const artist = useSelector((store) => store.artistReducer);
  const feelings = useSelector((store) => store.feelingReducer);

  const renderFeedback = () => {
    let feedbackData = [];
    let feedbackRow = { feelings };

    feedbackData.push(feedbackRow);
    console.log("renderFeedback", feedbackData);
  };
  useEffect(() => {
    console.log("in useEffect");
    renderFeedback();
  }, []);

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

      {/* <ul onChange={() => renderFeedback([feedbackData])}></ul> */}
      {/* <ul>{renderFeedback()}</ul> */}
      <table>
        <tbody>{renderFeedback()}</tbody>
      </table>
      <button onSubmit={onSubmit} type="submit">
        Submit
      </button>
    </>
  );
}

export default Review;
