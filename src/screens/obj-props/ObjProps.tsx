import React from 'react';
import Dashboard from './components/Dashboard';

const ObjProps = () => {
  const username = {
    firstName: '山田',
    lastName: '太郎',
  };

  const followers = [
    {
      firstName: '田中',
      lastName: '大貴',
    },
    {
      firstName: '鈴木',
      lastName: '純平',
    },
    {
      firstName: '太田',
      lastName: '和樹',
    },
  ];

  return (
    <div>
      <Dashboard username={username} followers={followers} />
    </div>
  );
};

export default ObjProps;
