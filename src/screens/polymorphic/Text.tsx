import React from 'react';

// type TextProps = {
//   size?: 'sm' | 'lg';
//   color?: 'red' | 'blue';
//   children: React.ReactNode;
// };

type TextProps = {
  size?: 'sm' | 'lg';
  color?: 'red' | 'blue';
  children: React.ReactNode;
  as?: React.ElementType;
};

const Text = ({ size, color, children, as }: TextProps) => {
  const Component = as || 'div';
  // return <div className={`text-${size}-${color}`}>{children}</div>;
  return <Component className={`text-${size}-${color}`}>{children}</Component>;
};

export default Text;
