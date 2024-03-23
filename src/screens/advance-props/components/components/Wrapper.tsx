import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = (props: WrapperProps) => {
  return <div>{props.children}</div>;
};

export default Wrapper;
