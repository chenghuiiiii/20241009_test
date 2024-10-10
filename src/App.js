import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import PerformanceTracker from './components/PerformanceTracker';
import ScorePredictor from './components/ScorePredictor'
import ScoreDistribution from './components/ScoreDistribution';
import OpportunityPredictor from './components/OpportunityPredictor';
import Assistant from './components/Assistant';

function App() {
  return (
    <div className="App">
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex-1 p-6 h-full overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="lg:col-span-2">
              <ScorePredictor />
            </div>
            <PerformanceTracker />
            <ScoreDistribution />
            <div className="lg:col-span-2">
              <OpportunityPredictor />
            </div>
          </div>
        </div>
        <Assistant />
      </div>
    </div>
  );
}

export default App;
