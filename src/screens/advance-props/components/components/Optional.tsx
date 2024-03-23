import React from 'react';

type OptionalProps = {
  name: string;
  // age: number;
  // 任意項目は？をつける
  age?: number;
};

const Optional = (props: OptionalProps) => {
  return (
    <div>
      <p>名前：{props.name}</p>
      <p>年齢：{props.age ? props.age : '未入力'}</p>
    </div>
  );
};

export default Optional;
