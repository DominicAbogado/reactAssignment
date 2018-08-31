import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [],
      test: false
    };  
    this.rearrangeList = this.rearrangeList.bind(this)  
  }
  // Setting this.state.friends to the friends json array


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  rearrangeList() {
    // this.setState({
    //   test: !this.state.test
    // });
    let friendList = friends

    let swapElement = (array, indexA, indexB) => {
      let tempElement = array[indexA]
      array[indexA] = array[indexB]
      array[indexB] =tempElement
    }
    let newFriendList = swapElement(friendList, 0, 1)
    console.log(newFriendList)
  }

  componentDidMount(){
    this.setState({
      friends: friends
    })
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let friends = this.state.friends.map((friend) => {
       return (
          <FriendCard
            rearrange={this.rearrangeList}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
       )
    })

    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends ? friends : <div><p>YOU AINT GOT NO FRIENDS</p></div>}
      </Wrapper>
    );
  }
}

export default App;
