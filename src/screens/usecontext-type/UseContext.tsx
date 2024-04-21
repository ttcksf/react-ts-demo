import React from 'react';
import Card from './context/Card';
import ThemeContextProvider from './context/ThemeContextProvider';

const UseContext = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Card />
      </ThemeContextProvider>
    </div>
  );
};

export default UseContext;
