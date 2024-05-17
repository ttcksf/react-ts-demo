import React from 'react';

type ListProps = {
  // 配列で受け取る時は要素の型指定
  items: string[];
  // 関数のため引数と戻り値の型指定
  onClick: (value: string) => void;
};

const Lists = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h2>選択してください</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
