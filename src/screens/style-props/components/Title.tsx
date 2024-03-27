import React from 'react';

type TitleStyleProps = {
  // 文字列だがCSS以外の文字列も書けてしまうため専用の型が用意されている
  // styles: string;
  styles: React.CSSProperties;
};

const Title = (props: TitleStyleProps) => {
  return (
    <div>
      {/* <h1 style={{ fontSize: '40px', color: 'red' }}>タイトル</h1> */}
      <h1 style={props.styles}>タイトル</h1>
    </div>
  );
};

export default Title;
