import React from 'react';
import Lists from './Lists';

const GenericPropsAdvance = () => {
  const students = [
    {
      name: 'yamada',
      age: 20,
      gender: 'female',
    },
    {
      name: 'tanaka',
      age: 21,
      gender: 'male',
    },
    {
      name: 'yoshida',
      age: 22,
      gender: 'male',
    },
  ];
  return (
    <div>
      <Lists items={students} onClick={(item) => console.log(item)} />
    </div>
  );
};

export default GenericPropsAdvance;
