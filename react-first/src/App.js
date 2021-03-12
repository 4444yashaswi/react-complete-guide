import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
              {name: "Yashaswi", age: 18},
              {name: "Random", age: 20}
        ],
    showPerson: false   
  }

  deletePersonHandler = (personIndex) => {
    const persons=this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  
  showPersonsToggler = () => {
    const temp = this.state.showPerson;
    this.setState({showPerson: !temp});
  }

  render() {
    let persons = null;
    if(this.state.showPerson) {
      persons = (
         <div>
          {
            this.state.persons.map((person , index) => {
              return <Person
              clicked = {() => this.deletePersonHandler(index)}
              name= {person.name}
              age= {person.age} />
            })
          }
          </div>
        );
    }


    return (
      <div className="App">
        <h1>hello world</h1>
        <button className='Button' onClick = {this.showPersonsToggler} >Click Me</button>
        {persons}
      </div>
    );
  }
}

export default App;
