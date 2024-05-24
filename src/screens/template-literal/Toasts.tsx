import React from 'react';

type FirstNameProps = string;
type LastNameProps = string;
type NameProps = {
  fullName: `${FirstNameProps} ${LastNameProps}`;
};

const Toasts = ({ fullName }: NameProps) => {
  return <div>{fullName}</div>;
};

export default Toasts;
