import './App.css';

import React, { useState } from 'react';
import { useQuery } from 'react-query';

import logo from './logo.svg';
import { getUser } from './api/user';
import { DemoComponent } from './components/DemoComponent';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <DemoComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
