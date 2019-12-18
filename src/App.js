//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeStart, homeScore] = useState (0);  
  const [awayStart, awayScore] = useState (0);

  const homeTouchdown = (e) => {
     homeScore(homeStart + 7)
  }
  const awayTouchdown = (e) => {
    awayScore(awayStart + 7) 
  }
  const homeFieldGoal = (e) => {
    homeScore(homeStart + 3)
  }
  const awayFieldGoal = (e) => {
    awayScore(awayStart + 3)
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeStart}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayStart}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
