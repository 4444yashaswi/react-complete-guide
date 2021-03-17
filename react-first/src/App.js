import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
              {id: "ab1", name: "Yashaswi", age: 18},
              {id: "ab2", name: "Kushagra", age: 21},
              {id: "ab3", name: "Random", age: 20}
        ],
    otherState: 'some other value',
    showPerson: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };



    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons=[...this.state.persons];
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
              changed = {(event) => this.nameChangedHandler(event , person.id)}
              clicked = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age} 
              key = {person.id} />
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
