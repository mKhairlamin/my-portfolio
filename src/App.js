// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hi, my name is Amin, a web developer passionate about building web applications.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>Project 1: A cool project I worked on</li>
            <li>Project 2: Another amazing project</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
