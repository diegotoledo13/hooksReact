import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });
  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>Counter APP :{counter1} </h1>
      <h1>Counter APP :{counter2} </h1>
      <h1>Counter APP :{counter3} </h1>
      <hr />
      <button
        className="btn"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
