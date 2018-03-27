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
  let currentFriend = event.target.alt;

 this.setState({
    clickedFriends:this.state.clickedFriends.push(currentFriend)
   })
   console.log(this.state.clickedFriends);
  let FriendAlreadyClicked = () => {}

 for (let i = 0; i < this.state.clickedFriends.length; i++) {
      if(currentFriend === this.state.clickedFriends[i]) {
        this.setState({})
     //    return true;
     //   }
     // }
     // return false;

  }

}

  //console.log(FriendAlreadyClicked());
 if (FriendAlreadyClicked()) {
  this.setState({
  friends: this.state.friends.sort(function(a,b) {
      //console.log("clicked");
      return 0.5-Math.random();
  alert ("You've lost your marbles, Try again?");
    }),

    clickedFriends: [],
    score:0
 });



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
      
      <div>
      <Wrapper>
      
      <Title>
       score = {this.state.score}
       </Title>
           <div className="wrapper">
          {this.state.friends.map(friend => (
            <FriendCard
              imageClick={this.imageClick}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              name={friend.name}
            />
          ))}
        </div>
        </Wrapper>
 </div>
    );
  }
}

export default App;
