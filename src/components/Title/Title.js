import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}<p className="gamename">Friends Memory Tester</p><h2 className="directions">Try to click each card only once!</h2></h1>


export default Title;
