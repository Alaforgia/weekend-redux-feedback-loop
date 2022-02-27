import React from "react";

function Comments() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      payload: { comment },
    });
    setComment("");
    // history.push("/");
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
