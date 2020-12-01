import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: data
    };
    console.log("App: Component State Setup");
  }

  componentDidMount() {
    console.log("App: Component Mounted");
  }

  render() {
    console.log("App: Component Rendered");
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
