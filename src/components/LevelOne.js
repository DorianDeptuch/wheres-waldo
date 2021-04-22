import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import levelOneImage from "../images/PXLCON-highres.jpg";
import firebase from "firebase";
import Notification from "./Notification";

function LevelOne({
  setTimer,
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
  setShowRemaining,
}) {
  const db = firebase.firestore();
  const [popup, setPopup] = useState(false);
  const [mouseXPosition, setMouseXPosition] = useState(0);
  const [mouseYPosition, setMouseYPosition] = useState(0);
  const [coordArray, setCoordArray] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");
  //For memory leak in useEffect
  const [state, setState] = useState({});

  //Get data from database and attempt to push it into an array then assign each value in the popup
  useEffect(() => {
    function getCoords(data) {
      data.forEach((doc) => {
        let info = doc.data();
        setCoordArray((prev) => [...prev, info.coords]);
      });
    }

    const allCoords = db
      .collection("coordinates")
      .get()
      .then((snapshot) => getCoords(snapshot.docs));

    //Fixes memory leak
    return () => {
      setState({});
    };
  }, []);

  const handlePopup = (e) => {
    setPopup((previous) => !previous);
    setMouseXPosition(e.pageX);
    setMouseYPosition(e.pageY);
  };

  if (foundMagikarp && foundWaldo && foundBluePortal && foundAngryBird) {
    setLevelComplete(true);
    setShowRemaining(false);
  }
  return (
    <div className="level-one-container">
      <img
        className="level-one"
        src={levelOneImage}
        alt="Level One"
        onClick={handlePopup}
        // onTouch={handlePopup}
      ></img>
      {popup ? (
        <Popup
          mouseXPosition={mouseXPosition}
          mouseYPosition={mouseYPosition}
          setTimer={setTimer}
          setPopup={setPopup}
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
          coordArray={coordArray}
          setMessage={setMessage}
          setShowNotification={setShowNotification}
        />
      ) : null}
      {showNotification ? (
        <Notification
          message={message}
          setShowNotification={setShowNotification}
        />
      ) : null}
    </div>
  );
}

export default LevelOne;
