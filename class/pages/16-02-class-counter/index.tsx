import { Component } from "react";

interface Istate {
  count: number;
}

export default class CounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCounter = () => {
    this.setState((prev: Istate) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCounter}>키운트올리기</button>
      </div>
    );
  }
}
