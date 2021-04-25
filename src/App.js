import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LevelOne from "./components/LevelOne";
import Complete from "./components/Complete";
import LeaderBoard from "./components/LeaderBoard";
import LevelChoiceModal from "./components/LevelChoiceModal";

function App() {
  const [mobileUser, setMobileUser] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showRemaining, setShowRemaining] = useState(false);
  const [userName, setUserName] = useState("");
  const [levelOne, setLevelOne] = useState([
    "Magikarp",
    "Waldo",
    "Blue Portal",
    "Angry Bird",
  ]);
  const [foundMagikarp, setFoundMagikarp] = useState(false);
  const [foundWaldo, setFoundWaldo] = useState(false);
  const [foundBluePortal, setFoundBluePortal] = useState(false);
  const [foundAngryBird, setFoundAngryBird] = useState(false);
  const [levelComplete, setLevelComplete] = useState(false);
  const [hideSubmit, setHideSubmit] = useState(false);

  const handleViewLeaderboard = () => {
    setShowLeaderboard(true);
    setLevelComplete(false);
    setShowGame(false);
    setShowRules(false);
  };

  const formatTime = (time) => {
    if (time) {
      const getSeconds = `0${time % 60}`.slice(-2);
      const minutes = `${Math.floor(time / 60)}`;
      const getMinutes = `0${minutes % 60}`.slice(-2);
      const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

      return `${getHours} : ${getMinutes} : ${getSeconds}`;
    } else {
      const getSeconds = `0${timer % 60}`.slice(-2);
      const minutes = `${Math.floor(timer / 60)}`;
      const getMinutes = `0${minutes % 60}`.slice(-2);
      const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

      return `${getHours} : ${getMinutes} : ${getSeconds}`;
    }
  };

  const detectMobileDevice = () => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setMobileUser(true);
    }
    return;
  };

  const handleMobileHeader = () => {
    if (mobileUser) {
      console.log(mobileUser);
      const header = document.querySelector(".header");
      const gameStats = document.querySelector(".game-stats-container");
      const waldoTitle = document.querySelector(".waldo-title");
      const githubLink = document.querySelector(".github-link");
      const mq1 = window.matchMedia("(min-width: 1500px)");
      const mq2 = window.matchMedia("(min-width: 2000px)");
      const mq3 = window.matchMedia("(min-width: 2500px)");

      header.style.position = "absolute";
      header.style.width = window.innerWidth;
      header.style.height = window.innerHeight / 10;
      header.style.left = window.pageXOffset + "px";
      header.style.top = window.pageYOffset + "px";

      if (mq1.matches) {
        gameStats.style.transform = "scale(1.5)";
        waldoTitle.style.fontSize = "2.5rem";
        githubLink.style.transform = "scale(1.5)";
      }
      if (mq1.matches && mq2.matches) {
        gameStats.style.transform = "scale(2)";
        waldoTitle.style.fontSize = "3rem";
        githubLink.style.transform = "scale(2)";
      }
      if (mq1.matches && mq2.matches && mq3.matches) {
        gameStats.style.transform = "scale(2.5)";
        waldoTitle.style.fontSize = "4.5rem";
        githubLink.style.transform = "scale(2.5)";
      }
    }
    return;
  };

  window.addEventListener("scroll", handleMobileHeader);
  window.addEventListener("resize", handleMobileHeader);

  return (
    <div>
      <Header
        timer={timer}
        setTimer={setTimer}
        showGame={showGame}
        setShowRemaining={setShowRemaining}
        showRemaining={showRemaining}
        foundMagikarp={foundMagikarp}
        foundWaldo={foundWaldo}
        foundBluePortal={foundBluePortal}
        foundAngryBird={foundAngryBird}
      />
      {showLeaderboard ? (
        <LeaderBoard
          userName={userName}
          timer={timer}
          showLeaderboard={showLeaderboard}
          setShowLeaderboard={setShowLeaderboard}
          formatTime={formatTime}
        />
      ) : !showGame ? (
        <div className="content-container">
          <h2>Select Level:</h2>
          <div className="level-choice-container">
            <LevelChoiceModal
              find={levelOne}
              timer={timer}
              setTimer={setTimer}
              showRules={showRules}
              setShowRules={setShowRules}
              showGame={showGame}
              setShowGame={setShowGame}
              setShowRemaining={setShowRemaining}
              handleViewLeaderboard={handleViewLeaderboard}
            />
          </div>
        </div>
      ) : !levelComplete ? (
        <LevelOne
          setTimer={setTimer}
          foundMagikarp={foundMagikarp}
          foundWaldo={foundWaldo}
          foundBluePortal={foundBluePortal}
          foundAngryBird={foundAngryBird}
          setFoundMagikarp={setFoundMagikarp}
          setFoundWaldo={setFoundWaldo}
          setFoundBluePortal={setFoundBluePortal}
          setFoundAngryBird={setFoundAngryBird}
          setLevelComplete={setLevelComplete}
          levelComplete={levelComplete}
          setShowRemaining={setShowRemaining}
        />
      ) : (
        <Complete
          timer={timer}
          userName={userName}
          setUserName={setUserName}
          handleViewLeaderboard={handleViewLeaderboard}
          formatTime={formatTime}
          setLevelComplete={setLevelComplete}
          levelComplete={levelComplete}
          foundMagikarp={foundMagikarp}
          foundWaldo={foundWaldo}
          foundBluePortal={foundBluePortal}
          foundAngryBird={foundAngryBird}
          setFoundMagikarp={setFoundMagikarp}
          setFoundWaldo={setFoundWaldo}
          setFoundBluePortal={setFoundBluePortal}
          setFoundAngryBird={setFoundAngryBird}
          setShowGame={setShowGame}
          setShowRules={setShowRules}
          setTimer={setTimer}
          hideSubmit={hideSubmit}
          setHideSubmit={setHideSubmit}
        />
      )}
    </div>
  );
}

export default App;
