import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PerformanceTracker from './components/PerformanceTracker';
import ScoreDistribution from './components/ScoreDistribution';
import OpportunityPredictor from './components/OpportunityPredictor';
import Assistant from './components/Assistant';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <PerformanceTracker />
            <ScoreDistribution />
          </div>
          <div>
            <OpportunityPredictor />
            <Assistant />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
