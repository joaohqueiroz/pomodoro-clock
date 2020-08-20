import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FaPlay, FaPause } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

import './styles.css';

interface ITimer {
  length: number
  isSession: boolean;
}

const Timer: React.FC<ITimer> = ({ length, isSession }) => {
  const [timeLeft, setTimeLeft] = useState(length);

  const formattedTimeLeft = moment(timeLeft, 'minutes').format('mm:ss');
  
  let play = true;
  const isPlayed = () => {
    return play = !play;
  };

  function resetButtonHandler() {
    setTimeLeft(length);
  }

  useEffect(() => {
    setTimeLeft(length);
  }, [length]);

  return (
    <div className="timer-container">
      <h1 className="title">{isSession ? "Session" : "Break"}</h1>
      <h1 className="timer">{formattedTimeLeft}</h1>
      <div className="buttons-container">
        <button className="buttons-container-item" onClick={isPlayed}> 
          {play ? <FaPlay /> : <FaPause />} {play ? " Start" : " Pause"} 
        </button>
        <button className="buttons-container-item" onClick={resetButtonHandler}>
          <GrPowerReset /> Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;