import React from "react";
import friends from "../../friends.json";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="card" onClick={props.imageClick}> <p>{props.name}</p>
    <div className="img-container">
    <img src  = {props.image} style= {{maxWidth: 190, maxHeight: 120}}/>
    </div>
  </div>
);

export default FriendCard;

