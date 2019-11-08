import React from "react";
import "./style.css";

function Score(props)
{
    return(
        <div className="scoreDiv">
        <p id="p0">Your Score: {props.score} | Top Score :{props.topscore}</p>
        <h1>GAME OF MEMORY</h1>
        <p id="p1">You already clicked it!</p>
      </div>
    )
}
export default Score;