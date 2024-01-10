// App.js
import React from 'react';
import './App.css';

function App() {
  const myPhotoUrl = 'https://akcdn.detik.net.id/visual/2019/11/15/d6aabe51-30f0-4998-94cd-4b87491a4e07_169.jpeg?w=715&q=90';

  return (
    <div className="App">
      <header className="App-header">
        <img src={myPhotoUrl} className="App-photo" alt="My Photo" />
        <div className="App-text">
          <h1>Nama aria m.r</h1>
          <p>Web Developer</p>
          <p>
            Selamat datang di portofolio saya! Saya seorang pengembang web dengan fokus pada teknologi React.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
