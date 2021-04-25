import React, { useEffect } from "react";

function Timer({ timer, setTimer }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((previous) => previous + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return <div className="timer-container">{formatTime()}</div>;
}

export default Timer;
