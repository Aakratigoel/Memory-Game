import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="mainDiv">
    <div className="card">
      <img alt={props.name} src={props.image} onClick={()=>props.incrementScore(props.id)} />
    </div>
   
    </div>
  );
}

export default CharacterCard;
