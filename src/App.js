import React from 'react';
import './styles/App.css';
import Header from './components/Header';  // Import Header component

function App() {
  return (
    <div className="App">
      <Header />  {/* Use the Header component */}
      <main>
        <h2>Explore the wonders of the universe!</h2>
      </main>
    </div>
  );
}

export default App;
