import React from 'react';

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// Tが何を表すものなのかをTypeScriptが知らないためextendsで型指定をする
const Lists = <T extends { name: string; age: number; gender: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>選択してください</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
