// import React from "react";
import "./App.css"
import { Pokemon } from "./components/projects/Pokemon/Pokemon";
// import { ToggleSwitch } from "./components/projects/ToggleSwitch/ToggleSwitch";
// import { Todo } from "./components/projects/Todo/Todo";
export const App = () => {
  return(
    <section className="container">
         {/* <ToggleSwitch/> */}
        {/* <Todo/> */}
        <Pokemon/>
    </section>
  ); 
  // <h1>Hello , Yogesh Choudhary</h1> ;
};


// console.log(React.createElement('h1' , null , "Hello , Yogesh Choudhary"));