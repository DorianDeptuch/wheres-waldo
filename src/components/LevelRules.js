import React from "react";
import magikarp from "../images/magikarp-pixel.png";
import waldo from "../images/waldo-pixel.png";
import bluePortal from "../images/blue-portal-pixel.png";
import angryBird from "../images/angry-bird-pixel.png";
// import magikarpAnimated from "../images/magikarp-animated.gif";
// import bluePortalAnimated from "../images/blue-portal-animated.gif";

function LevelRules({ find }) {
  return (
    <div className="level-rules">
      <h3>Objective:</h3>
      <p>
        Find the following characters/items scattered across the map in the
        shortest amount of time possible. Click on a character/item for a popup
        to appear. Select the correct answer or face a{" "}
        <span style={{ color: "red" }}>30 second penalty</span>. This map is
        BIG! Scroll <span style={{ color: "#00cbff" }}>up/down</span> and{" "}
        <span style={{ color: "#00cbff" }}>left/right</span> to search.
      </p>

      <div className="list-of-characters-to-find">
        <div className="character-to-find">
          <div>
            <img src={magikarp} alt="Magikarp Icon"></img>
          </div>
          <div className="character-name">{find[0]}</div>
          <div className="difficulty" style={{ color: "green" }}>
            Easy
          </div>
        </div>
        <div className="character-to-find">
          <div>
            <img src={waldo} alt="Waldo Icon"></img>
          </div>
          <div className="character-name">{find[1]}</div>
          <div className="difficulty" style={{ color: "yellow" }}>
            Medium
          </div>
        </div>
        <div className="character-to-find">
          <div>
            <img src={bluePortal} alt="Blue Portal Icon"></img>
          </div>
          <div className="character-name">{find[2]}</div>
          <div className="difficulty" style={{ color: "orange" }}>
            Hard
          </div>
        </div>
        <div className="character-to-find">
          <div>
            <img src={angryBird} alt="Angry Bird Icon"></img>
          </div>
          <div className="character-name">{find[3]}</div>
          <div className="difficulty" style={{ color: "red" }}>
            Extreme
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelRules;
