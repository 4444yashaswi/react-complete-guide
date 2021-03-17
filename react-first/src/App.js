import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    };

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

        style.backgroundColor = 'red';
        style [':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }

    //here we re trying to allocate css classes dynamically:
    const classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if (this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>hello world</h1>
        <p className={classes.join(' ')} >This is really working!</p>
        <button style={style} onClick = {this.showPersonsToggler} >Click Me</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
