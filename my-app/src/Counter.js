import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

//useState =numbers
// const [state, setState] = useState(InitialValue)
export function Counter() {
  //let like = 10;
  //console.log(like + 1)
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div className="user-container">                        
      <IconButton  
      onClick={() => setLike(like + 1)} 
      className="bt-sz-lg"
      aria-label="like button"
      color="primary"
    >
      <Badge badgeContent={like} color="primary">
      👍 
    </Badge>
        
 
</IconButton>

<IconButton  
     onClick={() => setDislike(dislike + 1)}
      className="bt-sz-lg"
      aria-label="like button"
      color="error"
    >    
     <Badge badgeContent={dislike} color="primary">
     👎
    </Badge>

      </IconButton>
     
      {/* <button className="btn-dislike" onClick={() => setDislike(dislike + 1)}>
        👎 {dislike}
      </button> */}
    </div>
  );
}
