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
  const [mobileUser, setMobileUser] = useState(false);
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
