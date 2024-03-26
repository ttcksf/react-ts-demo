import React from 'react';
// childrenだからstringとなりがちだが、コンポーネントファイルのためReact.ReactNodeというものを指定する
type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = (props: WrapperProps) => {
  return <div>{props.children}</div>;
};

export default Wrapper;
