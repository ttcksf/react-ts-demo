import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import User from './context/User';

const UseContext = () => {
  return (
    <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
};

export default UseContext;
