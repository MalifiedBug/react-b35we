import { useState } from "react";

//useState =numbers
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="user-container">
      <button className="btn-like" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      <button className="btn-dislike" onClick={() => setDislike(dislike + 1)}>
        👎 {dislike}
      </button>
    </div>
  );
}
