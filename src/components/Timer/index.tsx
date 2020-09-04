import React, { useState, useEffect } from 'react';
import * as moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { FaPlay, FaPause } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';
// import ReactAudioPlayer from 'react-audio-player';

import './styles.css';

interface ITimer {
  length: number
  isSession: boolean;
}

momentDurationFormatSetup(moment);

const Timer: React.FC<ITimer> = ({ length, isSession }) => {
  const [timeLeft, setTimeLeft] = useState(length);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | any>(null);

  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');

  const isStarted = intervalID != null;

  const handleStartPauseButton = () => {
    if (isStarted) {
      clearInterval(intervalID);
      setIntervalID(null);
    } 
    else {
      const newIntervalID = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          return newTimeLeft >= 0 ? newTimeLeft : prevTimeLeft;
        })
      }, 1000);
      setIntervalID(newIntervalID);
    }

  };


  function handleResetButton() {
      clearInterval(intervalID);
      setTimeLeft(length);
      setIntervalID(null);
  }

  useEffect(() => {
    document.title = `[${formattedTimeLeft}] - Pomodoro Clock`
  }, [formattedTimeLeft]);

  useEffect(() => {
    if (isStarted === false)
      setTimeLeft(length);
  }, [length]);

  return (
    <div className="timer-container">
      <h1 className="title">{isSession ? "Session" : "Break"}</h1>
      <h1 className="timer">{formattedTimeLeft}</h1>
      <div className="buttons-container">
        <button className="buttons-container-item" onClick={handleStartPauseButton}>
          {isStarted ? <FaPause /> : <FaPlay />} {isStarted ? " Pause" : " Start"}
        </button>
        <button className="buttons-container-item" onClick={handleResetButton}>
          <GrPowerReset /> Reset
        </button>
      </div>
      {/* <ReactAudioPlayer 
        src="../../assets/audios/alarm-clock.wav" 
        autoPlay
        controls
      /> */}
    </div>
  );
}

export default Timer;