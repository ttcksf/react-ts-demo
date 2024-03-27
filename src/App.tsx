import React from 'react';
import logo from './logo.svg';
import './App.css';
import StyleProps from './screens/style-props/StyleProps';
import PropsTips from './screens/props-tips/PropsTips';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start
  return (
    <div className="App">
      <PropsTips />
    </div>
  );
}

export default App;
