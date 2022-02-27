const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log("In feedback POST with", req.body);
  const feedbackToAdd = req.body;
  const feedback = {
    feeling: parseInt(feedbackToAdd.feelings),
    understanding: parseInt(feedbackToAdd.understanding),
    support: parseInt(feedbackToAdd.support),
    comments: feedbackToAdd.comments,
  };
  console.log(feedbackToAdd);
  console.log(feedback);
  if (typeof feedback.feeling === Number) {
    throw new Error("feeling is NaN");
  }
  if (typeof feedback.understanding === Number) {
    throw new Error("understanding is NaN");
  }
  if (typeof feedback.support === Number) {
    throw new Error("support is NaN");
  }
  if (feedback.comments === null || feedback.comments === undefined) {
    throw new Error("comments is empty");
  }
  console.log("Type of feeling", typeof feedback.feeling);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4); `;
  pool
    .query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
