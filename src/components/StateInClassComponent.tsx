import { Component } from "react";

class StateInClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default StateInClassComponent;
