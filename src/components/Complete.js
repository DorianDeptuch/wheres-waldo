import React from "react";
import firebase from "firebase";

function Complete({
  userName,
  setUserName,
  timer,
  handleViewLeaderboard,
  formatTime,
  setLevelComplete,
  levelComplete,
  foundMagikarp,
  foundWaldo,
  foundBluePortal,
  foundAngryBird,
  setFoundMagikarp,
  setFoundWaldo,
  setFoundBluePortal,
  setFoundAngryBird,
  setShowGame,
  setShowRules,
  setTimer,
  hideSubmit,
  setHideSubmit,
}) {
  const db = firebase.firestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const strippedString = userName.replace(/(<([^>]+)>)/gi, "");
    setUserName(strippedString);

    db.collection("users")
      .add({
        user: userName,
        time: timer,
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setHideSubmit(true);
    e.target.reset();
  };

  const handleViewLevelSelect = () => {
    setFoundMagikarp(false);
    setFoundWaldo(false);
    setFoundBluePortal(false);
    setFoundAngryBird(false);
    setLevelComplete(false);
    setShowGame(false);
    setShowRules(false);
    setTimer(0);
    setHideSubmit(false);
  };

  const handleGameCompleteLeaderboard = () => {
    setFoundMagikarp(false);
    setFoundWaldo(false);
    setFoundBluePortal(false);
    setFoundAngryBird(false);
    setLevelComplete(false);
    setShowGame(false);
    setShowRules(false);
    setTimer(0);
    handleViewLeaderboard();
    setHideSubmit(false);
  };

  return (
    <div className="level-complete">
      <div>
        <div>
          <h3>
            You beat the level in{" "}
            <span className="completed-time">{formatTime()}</span>
          </h3>
          <h3>Congratulations!</h3>
        </div>
        {!hideSubmit ? (
          <form onSubmit={handleSubmit}>
            <label>Enter your name to be added to the leaderboard!</label>
            <br />
            <input
              id="input-level-one"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              maxLength="10"
              required
            ></input>
            <button id="submit-button-level-one" type="submit">
              Submit
            </button>
          </form>
        ) : null}
      </div>
      <div className="level-complete-button-container">
        <button onClick={handleGameCompleteLeaderboard}>
          View LeaderBoard
        </button>
        <button onClick={handleViewLevelSelect}>View Level Select</button>
      </div>
    </div>
  );
}

export default Complete;
