import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "secondary" : "success";
    return (
      <div>
      <span style={this.styles} className={classes}>
        {this.formatCount()}
      </span>
      <button
        style={this.styles}
        onClick={() => this.props.onIncrement(this.props.counter)}
        className="btn btn-primary"
      >
        Add
      </button>
      {this.props.counter.value > 0 && (
        <button
          style={this.styles}
          onClick={() => this.props.onSubtract(this.props.counter)}
          className="btn m-2 btn-danger"
        >
          Remove
        </button>
      )}
    </div>    
    )}
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
