import React from 'react';

type InputProps = {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default Input;
