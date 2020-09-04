import React, { useState } from 'react';

import './App.css';
import Timer from './components/Timer';
import Break from './components/Break';
import Session from './components/Session';

function App() {

  // const initialSessionLength = moment.duration(1500, 's').minutes();
  // const initialBreakLength = moment.duration(300, 's').minutes();
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(60* 5);

  function decrementSession() {
    if (sessionLength !== 0)
      setSessionLength(sessionLength - 60);
  }

  function incrementSession() {
    setSessionLength(sessionLength + 60);
  }

  function decrementBreak() {
    if (breakLength !== 0)
      setBreakLength(breakLength - 60);
  }

  function incrementBreak() {
    setBreakLength(breakLength + 60);
  }

  function isSession() {
    return true;
  }


  return (
    <div className="card container">
      <div className="container" id="top-card">
        <Timer
          isSession={isSession()}
          length={isSession() ? sessionLength : breakLength}
        />
      </div>
      <div id="bottom-card" className="container">
        <div className="container-length">
          <Session
            title="Session Length"
            length={sessionLength}
            arrowDownHandler={decrementSession}
            arrowUpHandler={incrementSession}
          />
          <Break
            title="Break Length"
            length={breakLength}
            arrowDownHandler={decrementBreak}
            arrowUpHandler={incrementBreak}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
