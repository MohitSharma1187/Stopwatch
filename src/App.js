import './App.css';
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  const formatTime = (value) => {
    return value < 10 ? "0" + value : value;
  };

  const millis = formatTime(time % 100);
  const seconds = formatTime(Math.floor((time % 6000) / 100));
  const minutes = formatTime(Math.floor((time % 360000) / 6000));

  return (
    <div className="container">
      <div>
        <button className="start" onClick={startTimer}>
          Start
        </button>
        <button className="stop" onClick={stopTimer}>
          Stop
        </button>
        <button className="reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <p>
        <span>{minutes}</span>:<span>{seconds}</span>:<span>{millis}</span>
      </p>
    </div>
  );
};

export default Stopwatch;
