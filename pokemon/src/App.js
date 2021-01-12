import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Did Mount");
  }

  componentDidUpdate() {
    console.log("App: Component Did Update");
  }

  render() {
    console.log("App: Component Renders");
    return (
      <div className="App">
        { (this.state.pokemon.length === 0)?<h3>Loading...</h3>:<Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
