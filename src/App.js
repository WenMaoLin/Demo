import React from 'react';
import { HashRouter } from "react-router-dom";
import Main from './Layout';
import './App.sass';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
