import React from "react";
import firebase from "firebase";

function Popup({
  mouseXPosition,
  mouseYPosition,
  setTimer,
  setPopup,
  foundMagikarp,
  foundWaldo,
  foundBluePortal,
  foundAngryBird,
  setFoundMagikarp,
  setFoundWaldo,
  setFoundBluePortal,
  setFoundAngryBird,
  setLevelComplete,
  levelComplete,
  coordArray,
  setMessage,
  setShowNotification,
}) {
  const popupPosition = {
    left: mouseXPosition,
    top: mouseYPosition,
  };

  const handleMagikarpFound = () => {
    if (
      mouseXPosition > coordArray[8] &&
      mouseXPosition < coordArray[9] &&
      mouseYPosition > coordArray[10] &&
      mouseYPosition < coordArray[11]
    ) {
      setFoundMagikarp(true);
      setMessage("You Found Magikarp!");
      setPopup(false);
      setShowNotification(true);
    } else {
      setTimer((previous) => previous + 30);
      setMessage("Oops, that's not Magikarp!");
      setPopup(false);
      setShowNotification(true);
    }
  };

  const handleWaldoFound = () => {
    if (
      mouseXPosition > coordArray[12] &&
      mouseXPosition < coordArray[13] &&
      mouseYPosition > coordArray[14] &&
      mouseYPosition < coordArray[15]
    ) {
      setFoundWaldo(true);
      setMessage("You Found Waldo!");
      setPopup(false);
      setShowNotification(true);
    } else {
      setTimer((previous) => previous + 30);
      setMessage("Oops, that's not Waldo!");
      setPopup(false);
      setShowNotification(true);
    }
  };

  const handleBluePortalFound = () => {
    if (
      mouseXPosition > coordArray[4] &&
      mouseXPosition < coordArray[5] &&
      mouseYPosition > coordArray[6] &&
      mouseYPosition < coordArray[7]
    ) {
      setFoundBluePortal(true);
      setMessage("You Found the Blue Portal!");
      setPopup(false);
      setShowNotification(true);
    } else {
      setTimer((previous) => previous + 30);
      setMessage("Oops, that's not the Blue Portal!");
      setPopup(false);
      setShowNotification(true);
    }
  };

  const handleAngryBirdFound = () => {
    if (
      mouseXPosition > coordArray[0] &&
      mouseXPosition < coordArray[1] &&
      mouseYPosition > coordArray[2] &&
      mouseYPosition < coordArray[3]
    ) {
      setFoundAngryBird(true);
      setMessage("You Found Angry Bird!");
      setPopup(false);
      setShowNotification(true);
    } else {
      setTimer((previous) => previous + 30);
      setMessage("Oops, that's not Angry Bird!");
      setPopup(false);
      setShowNotification(true);
    }
  };

  // const handleWin = () => {
  //   console.log("nope");

  //   if (foundMagikarp && foundWaldo && foundBluePortal && foundAngryBird) {
  //     console.log("yup");
  //     setLevelComplete(true);
  //     clearInterval(intervalId);
  //     alert("you beat the level!");
  //   }
  // };

  // const intervalId = setInterval(handleWin, 1000);

  return (
    <div style={popupPosition} className="popup">
      <ul>
        <li
          style={foundMagikarp ? { opacity: 0.25 } : null}
          onClick={handleMagikarpFound}
        >
          Magikarp
        </li>
        <li
          style={foundWaldo ? { opacity: 0.25 } : null}
          onClick={handleWaldoFound}
        >
          Waldo
        </li>
        <li
          style={foundBluePortal ? { opacity: 0.25 } : null}
          onClick={handleBluePortalFound}
        >
          Blue Portal
        </li>
        <li
          style={foundAngryBird ? { opacity: 0.25 } : null}
          onClick={handleAngryBirdFound}
        >
          Angry Bird
        </li>
      </ul>
    </div>
  );
}

export default Popup;
