import React, { Component } from "react";
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleSubtract = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };


  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onSubtract={this.handleSubtract}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
