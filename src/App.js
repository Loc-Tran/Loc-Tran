import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './button.js';

function App() {
  return (
    <div className="App">
        <div>
          <Button name='About Me'/>
          <Button name='CV'/>
          <Button name='Contact Me'/>
        </div>
    </div>
  );
}

export default App;
