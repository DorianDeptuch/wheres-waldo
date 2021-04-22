import React from "react";
import LevelRules from "./LevelRules";
import levelOneImage from "../images/PXLCON-highres.jpg";

function LevelChoiceModal({
  find,
  timer,
  setTimer,
  showRules,
  setShowRules,
  showGame,
  setShowGame,
  setShowRemaining,
  handleViewLeaderboard,
}) {
  const handleShowRules = () => {
    setShowRules((previous) => !previous);
  };

  const handleStartGame = () => {
    setShowGame(true);
    setShowRemaining(true);
  };

  return (
    <div className="level-choice-modal">
      <div className="level-choice-content">
        {!showRules && <div className="level-title">PXL CON</div>}
        {!showRules ? (
          <img
            className="level-image"
            src={levelOneImage}
            alt="Level Preview"
          ></img>
        ) : (
          <LevelRules find={find} />
        )}
        {!showRules ? (
          <div className="button-container">
            <button onClick={handleShowRules}>Continue</button>
            <button onClick={handleViewLeaderboard}>View Leaderboard</button>
          </div>
        ) : (
          <div className="button-container">
            <button onClick={handleStartGame}>Start Game</button>
            <button
              onClick={() => {
                setShowRules(false);
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LevelChoiceModal;
