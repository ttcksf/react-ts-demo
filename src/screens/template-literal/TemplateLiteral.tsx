import React from 'react';
import Toasts from './Toasts';

const TemplateLiteral = () => {
  return (
    <div>
      <Toasts fullName="山田 太郎" />
      {/* テンプレートリテラルに沿わない値はコンパイルエラーになる */}
      {/* <Toasts fullName="山田太郎" /> */}
    </div>
  );
};

export default TemplateLiteral;
