import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <main>
      <div className="feed-wrapper">
        <Post />
        <Post />
      </div>
    </main>
  );
}

export default App;
