import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Score from "./components/Score"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    topscore: 0,
    newArray: []
  };
  myFunction =() => {
    setTimeout(function(){  document.getElementById("p1").style.display="none"; }, 1000);
  }
  handleIncrement = id => {
    // We always use the setState method to update a component's state
    
      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      
    
    if (this.state.newArray.length !== 0) {
      console.log("Entered the first if");
      for (var i = 0; i < this.state.newArray.length; i++) {
        if (this.state.newArray[i] === id) {
          console.log("Entered if ");
          document.getElementById("p1").style.display="block";
          this.myFunction();
          if(this.state.score>this.state.topscore)
          {
            this.setState({topscore:this.state.score})
          }
          this.setState({ score: 0 });
          this.setState({newArray:[]});
          this.setState({characters});
          return;
        }
      }
      this.state.newArray.push(id);
      this.setState({ score: this.state.score + 1 });
      if(this.state.topscore <= this.state.score)
      {
        this.setState({topscore:this.state.score +1});
      }
      this.setState({ newArray: this.state.newArray });
      this.setState({characters});
     
    }
    else{
      this.state.newArray.push(id);
      this.setState({ score: this.state.score + 1 });
      if(this.state.topscore <= this.state.score)
      {
        this.setState({topscore:this.state.score +1});
      }
      this.setState({ newArray: this.state.newArray });
      this.setState({characters});
     
    }
   

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Score score={this.state.score}  topscore = {this.state.topscore}/>
        {this.state.characters.map(character => (
          <CharacterCard
            incrementScore={this.handleIncrement}
            id={character.id}
            key={character.id}
            name={character.name}
            image={require("./images" + character.image)}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
