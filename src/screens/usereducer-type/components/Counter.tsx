import React, { useReducer } from 'react';

type CounterStateType = {
  count: number;
};

type CounterActionType = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };
function reducer(state: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {/* dispatch関数には型推論が効くので型指定しなくて良い */}
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        {/* typeとpayloadに違う型の値を入れるとエラーになる */}
        {/* <button onClick={() => dispatch({ type: false, payload: "test" })}> */}
        +
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        -
      </button>
    </div>
  );
};

export default Counter;
