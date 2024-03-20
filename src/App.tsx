import React from 'react';
import logo from './logo.svg';
import './App.css';
import ObjProps from './screens/obj-props/ObjProps';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start
  return (
    <div className="App">
      <ObjProps />
    </div>
  );
}

export default App;
