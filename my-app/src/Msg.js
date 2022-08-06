import { Counter } from "./Counter";

//props(properties) - like an argument in function
//Component Msg
//1.First letter must be capital
//2. Return JSX element
//props can be any name - props is an object
//Props destructuring
export function Msg({ name, pic }) {
    //const name ="Prasanth";
    console.log(name, pic);
    return (
      //fragment
      <div>
        <img className="profile-picture" src={pic} alt={pic} />
        <h1> {name} 😊</h1>
        <Counter />
      </div>
      //<h1>😊Hello B35WE {abc.name} {abc.age}😊</h1>
    );
  }
  