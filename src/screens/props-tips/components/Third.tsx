import React from 'react';
import { ThirdProps } from './Second.types';

const Third = ({ fullName }: ThirdProps) => {
  return (
    <div>
      <h1>
        {fullName.firstName} {fullName.lastName}
      </h1>
    </div>
  );
};

export default Third;
