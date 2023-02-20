import React from "react";

type CounterTwoProps = {
  counter: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};
export default function CounterTwo(props: CounterTwoProps) {
  return (
    <div>
      <h1>Counter Two</h1>
      <p data-testid="counter">{props.counter}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}> Increment</button>
      )}

      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
}
