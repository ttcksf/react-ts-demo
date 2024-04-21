import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';

const Card = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.firstTheme.main,
        color: theme.firstTheme.sub,
      }}
    >
      <h1>Card</h1>
    </div>
  );
};

export default Card;
