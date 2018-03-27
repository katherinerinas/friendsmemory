import React from "react";
import friends from "../../friends.json";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="card" onClick={props.imageClick}> <p>{props.name}</p>
    <div className="img-container" id="container">
    <img src= {props.image} alt={props.name} style= {{maxWidth: 150, maxHeight: 110}}/>
    </div>
  </div>
);

export default FriendCard;

