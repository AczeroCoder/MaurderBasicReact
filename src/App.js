import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State to hold the background color
  const [backgroundColor, setBackgroundColor] = useState('#282c34');

  // Function to handle button click and change background color
  const changeBackgroundColor = () => {
    // Generate a random color (you can change this logic if you want)
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    setBackgroundColor(randomColor);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="mainDiv">
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <p>Here is a basic app background color changer made with React!</p>
        </div>
        <button id="cColorBtn" onClick={changeBackgroundColor}>Change background color</button>
      </header>
    </div>
  );
}

export default App;