import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: 'asc1', name: 'Frankenstein' },
        { id: 'asr2', name: 'Dracula' },
        { id: 'as1w', name: 'Dr. Jekyll' },
        { id: 'are4', name: 'zombie' },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="App">
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </div>
      </>
    );
  }
}

export default App;
