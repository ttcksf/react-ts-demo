import React from 'react';
import logo from './logo.svg';
import './App.css';
import GenericPropsAdvance from './screens/generic-props-advance/GenericPropsAdvance';

function App() {
  // npx create-react-app フォルダ名 --template typescript
  // npm start

  return (
    <div className="App">
      <GenericPropsAdvance />
    </div>
  );
}

export default App;
