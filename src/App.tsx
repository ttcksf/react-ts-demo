import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeProps from './screens/type-props/TypeProps';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start
  return (
    <div className="App">
      <TypeProps />
    </div>
  );
}

export default App;
