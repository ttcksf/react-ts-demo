import React, { useReducer } from 'react';

type CounterStateType = {
  count: number;
};

type CounterActionType = {
  // stringよりも厳格にできる
  // type: 'increment' | 'decrement';
  // 1.type名の増減時には毎回修正する必要があるので注意
  // 2.初期値をセットするだけの簡単なものでもtypeとpayloadの型指定を定義した以上はtypeとpayloadはセットで書かないとコンパイルエラーになる
  type: 'increment' | 'decrement' | 'reset';
  payload: number;
};

// 3.もしくはtype別に型定義を分けてユニオン型にするとプロパティを書き忘れに対応できる
// type ChangeCountType = {
//   type: 'increment' | 'decrement';
//   payload: number;
// };
// type ResetCountType = {
//   type: "reset";
// }
// type CounterStateType = ChangeCountType | ResetCountType;

const initialState = { count: 0 };
function reducer(state: CounterStateType, action: CounterActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
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
        +
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>
        リセット
      </button>
      {/* 型定義を分けた場合 */}
      {/* <button onClick={() => dispatch({ type: 'reset' })}>
        リセット
      </button> */}
    </div>
  );
};

export default Counter;
