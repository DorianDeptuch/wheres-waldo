import React, { useState } from "react";
import firebase from "firebase";

function LeaderBoard({
  userName,
  timer,
  setShowLeaderboard,
  showLeaderboard,
  formatTime,
}) {
  const [userArray, setUserArray] = useState([]);
  const db = firebase.firestore();

  let html = "<h4>PXL CON</h4>";
  function getInfo(data) {
    data.forEach((doc) => {
      let info = doc.data();
      html += `<div class="leaderboard-entry">
                ${
                  info.user
                } &nbsp;-&nbsp; <span class="leaderboard-time">${formatTime(
        info.time
      )}</span>
              </div>`;
      document.querySelector(".leaderboard-level-one").innerHTML = html;
    });
  }

  db.collection("users")
    .orderBy("time")
    .get()
    .then((snapshot) => getInfo(snapshot.docs));

  // db.collection("users")
  //   .orderBy("time")
  //   .onSnapshot((snapshot) => {
  //     let changes = snapshot.docChanges();
  //     // changes.map()
  //     // setUserArray((previous) => [...previous, changes]);
  //     changes.forEach((change) => {
  //       // console.log(change.doc.data());
  //       if (change.type == "added") {
  //         console.log(change.doc.data());
  //         const { user, time } = change.doc.data();
  //         setUserArray((previous) => [...previous, [user, time]]);
  //       }
  //     });
  //   });
  // console.log(userArray);
  return (
    <div className="leaderboard-container">
      <h3>LeaderBoard</h3>
      <div className="leaderboard-level-one leaderboard-column">
        <h4>PXL CON</h4>
        <div className="leaderboard-entry">
          {userName} - {formatTime()}
        </div>
      </div>
      <div className="home-button-container">
        <button
          className="home-button"
          onClick={() => setShowLeaderboard(false)}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default LeaderBoard;
