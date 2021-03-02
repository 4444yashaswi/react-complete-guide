import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
              {name: "Yashaswi", age: 18},
              {name: "Random", age: 20}
        ]
           
  }

  clickMeHandler = () => {
    //console.log('\'Click Me\' was clicked');
    this.setState({
        persons : [
              {name: "Yashaswi Singh", age: 18},
              {name: "Random", age: 200000}
        ]
      });
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <button onClick = {this.clickMeHandler} >Click Me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies are watching movies</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
