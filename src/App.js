import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
 
  state = {
    friends,
    clickedFriends: [],
    score:0 
  };

imageClick = event => {
  const currentFriend = event.target.alt;

  var FriendAlreadyClicked = () => {
    for (let i = 0; i < this.state.clickedFriends.length; i++) {
      if(currentFriend === i) {
        return true;
      }
    }
    return false;
  }

  this.state.clickedFriends.indexOf(currentFriend) > -1;

console.log(FriendAlreadyClicked());
 if (FriendAlreadyClicked()) {
  this.setState({
    friends: this.state.friends.sort(function(a,b) {
      return 0.5-Math.random();
    }),

    clickedFriends: [],
    score:0
 });

alert ("You've lost your marbles, Try again?");

} else {
  this.setState(
  {
    friends: this.state.friends.sort(function(a,b){
      return 0.5 - Math.random();

    }),
    clickedFriends: this.state.clickedFriends.concat(
      currentFriend
      ),
    score:this.state.score + 1
 },

() => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              friends: this.state.friends.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0
            });
          }
        }
      );
    }
  };

render() {
    return (
      <Wrapper>
      <div>
      <Title>
       score ={this.state.score}
       </Title>
           <div className="wrapper">
          {this.state.friends.map(friend => (
            <FriendCard
              imageClick={this.imageClick}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              
            />
          ))}
        </div>
    </div>
     
</Wrapper>
    );
  }
}

export default App;
