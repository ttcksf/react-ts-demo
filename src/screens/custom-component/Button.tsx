import React from 'react';

// childrenとonClick関数を渡すにはReact.ComponentProps<"button">が必要になる
type ButtonProps = {
  color: 'red' | 'blue';
} & React.ComponentProps<'button'>;

const Button = ({ color, children, ...rest }: ButtonProps) => {
  return (
    <>
      <button className={`btn-${color}`} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
