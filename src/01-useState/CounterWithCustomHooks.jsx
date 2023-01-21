import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, resetValue } = useCounter();
  return (
    <>
      <hr />
      <h1>CounterWithCustomHooks: {counter} </h1>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button onClick={resetValue} className="btn btn-primary">
        Reset
      </button>
      <button onClick={decrement} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
