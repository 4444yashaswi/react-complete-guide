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

  clickMeHandler = (newName) => {
    //console.log('\'Click Me\' was clicked');
    this.setState({
        persons : [
              {name: newName, age: 18},
              {name: "Random", age: 200000}
        ]
      })
  }

  changeValueHandler = (event) => {
    this.setState({
      persons : [
              {name: 'Yashaswi', age: 18},
              {name: event.target.value, age: 20}
      ]
    })
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
            this.state.persons.map(person => {
              return <Person
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
