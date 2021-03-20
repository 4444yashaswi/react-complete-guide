import React, { Component } from 'react';
import classes from './App.css';
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
    let btnClass = '';

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

        btnClass = classes.Red;
    }

    //here we re trying to allocate css classes dynamically:
    const assignedClasses = [];
    if (this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>hello world</h1>
        <p className={assignedClasses.join(' ')} >This is really working!</p>
        <button className={btnClass} onClick = {this.showPersonsToggler} >Click Me</button>
        {persons}
      </div>
    );
  }
}

export default App;
