import { useState } from "react";

//useState =numbers
// const [state, setState] = useState(InitialValue)
export function Counter() {
  //let like = 10;
  //console.log(like + 1)
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
