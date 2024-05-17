import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentProps from './screens/component-props/ComponentProps';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start

  return (
    <div className="App">
      <ComponentProps />
    </div>
  );
}

export default App;
