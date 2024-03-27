import React from 'react';
import { SecondProps } from './Second.types';

// 別ファイルにタイプを切り出すこともできる
const Second = ({ firstName, lastName }: SecondProps) => {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default Second;
