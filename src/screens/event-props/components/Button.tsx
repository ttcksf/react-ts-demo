import React from 'react';

type BtnProps = {
  // 関数であり何も受け取らず何も返さない
  // click: () => void;
  click: (e: React.MouseEvent<HTMLButtonElement>, text: string) => void;
};

const Button = (props: BtnProps) => {
  return (
    <div>
      {/* <button onClick={props.click}>Button</button> */}
      <button onClick={(e) => props.click(e, 'おはよう')}>Button</button>
    </div>
  );
};

export default Button;
