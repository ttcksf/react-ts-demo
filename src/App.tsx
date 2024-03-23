import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdvanceProps from './screens/advance-props/components/AdvanceProps';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start
  return (
    <div className="App">
      <AdvanceProps />
    </div>
  );
}

export default App;
