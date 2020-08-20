import React, { useState } from 'react';
import moment from 'moment';

import './App.css';
import Timer from './components/Timer';
import Break from './components/Break';
import Session from './components/Session';

function App() {

  const initialSessionLength = moment.duration(1500, 's').minutes();
  const initialBreakLength = moment.duration(300, 's').minutes();
  const [sessionLength, setSessionLength] = useState(initialSessionLength);
  const [breakLength, setBreakLength] = useState(initialBreakLength);

  function decrementSession() {
    if (sessionLength !== 0)
      setSessionLength(sessionLength - 1);
  }

  function incrementSession() {
    setSessionLength(sessionLength + 1);
  }

  function decrementBreak() {
    if (breakLength !== 0)
      setBreakLength(breakLength - 1);
  }

  function incrementBreak() {
    setBreakLength(breakLength + 1);
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
