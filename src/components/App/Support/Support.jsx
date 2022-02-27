import React from "react";

function Support() {
  const [support, setSupport] = useState("");
  const dispatch = useDispatch();
  onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_SUPPORT",
      payload: { support },
    });
    setSupport("");
    // history.push("/");
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
