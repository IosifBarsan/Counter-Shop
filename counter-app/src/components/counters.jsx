import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter key={counter.id} 
          value={counter.value}
          onSubtract={this.props.onSubtract}
          onIncrement={this.props.onIncrement}
          counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

