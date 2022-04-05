import { Component, createRef } from "react";
import Router from "next/router";

interface Istate {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨!!!");
    // 포커스 깜빡깜빡
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("수정되고 다시그려짐!!!");
  }

  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!");
    // 채팅방 나가기!!!
  }

  onClickCounter = () => {
    this.setState((prev: Istate) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>{this.state.count}</div>
        <button onClick={this.onClickCounter}>키운트올리기</button>
        <button onClick={this.onClickMove}>나가기!!!</button>
      </div>
    );
  }
}
