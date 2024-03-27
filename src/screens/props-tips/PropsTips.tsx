import React from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

const PropsTips = () => {
  return (
    <div>
      <First firstName="山田" lastName="太郎" />
      <Second firstName="山田" lastName="太郎" />
      <Third fullName={{ firstName: '山田', lastName: '太郎' }} />
    </div>
  );
};

export default PropsTips;
