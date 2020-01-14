import React from 'react';

import data from './data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
    console.log('Constructor is running')
  }

  componentDidMount() {
    console.log('componentDidMount is running')
    // fetch initial data and set it to state
    // setup:
      // event listeners
      // subscriptions
      // timers
    // TASK
    // update Pokemon state with the data array
    this.setState({pokemon: data})

  }

  componentWillUnmount() {
    // To avoid memory leaks
    // remove/destroy:
      // event listeners
      // subscriptions
      // timers
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate is running')
  }

  render() {
    // Renders things to the DOM
    console.log('App is rendering')
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
