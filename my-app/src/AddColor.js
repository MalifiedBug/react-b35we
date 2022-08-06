import { useState } from "react";
import ColorBox from "./ColorBox";
import Button from '@mui/material/Button';


//onClick -camel case letter
//Hooks -is a function- starts with "use"
//useState - need to import -
//obj destructuring - const [state, setState] = useState(Initialvalue)
//update the state = re-render - update
//import {useState}  from "react"
//state - state of art tech | state of mind - current scenario
//use of state - to change state value of setState
//useState =string
export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("orange");

  //Array of string
  //  const colorList = ["orange", "crimson", "red","purple"];
  const [colorList, setColorList] = useState(["pink", "crimson", "red", "purple"]);

  const styles = {
    fontSize: "25px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input onChange={(e) => setColor(e.target.value)}
          style={styles}
          type="text"
          // placeholder="Enter Color"
          value={color} />
        {/* <button
          //cope the colorList and add newColor to it
          onClick={() => setColorList([...colorList, color])}
        >Add Color</button> */}

        <Button onClick={() => setColorList([...colorList, color])} 
        variant="contained">Add Color</Button>


      </div>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color= {colorList[0]} /> */}


    </div>
  );
}
