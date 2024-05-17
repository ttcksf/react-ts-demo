import React from 'react';
import Lists from './Lists';

const GenericProps = () => {
  const users = ['yamada', 'tanaka', 'yoshida'];
  const areas = ['tokyo', 'osaka', 'nagoya'];
  return (
    <div>
      <Lists items={users} onClick={(item) => console.log(item)} />
      <Lists items={areas} onClick={(item) => console.log(item)} />
    </div>
  );
};

export default GenericProps;
