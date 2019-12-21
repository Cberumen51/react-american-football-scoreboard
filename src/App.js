//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import useClock from 'use-clock'

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeStart, homeScore] = useState (0);  
  const [awayStart, awayScore] = useState (0);
  const [seconds, setSeconds] = useState(900000);
  const[isActive, setIsActive] =useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(900000);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 900000) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const homeTwoPointer = (e) => {
     homeScore(homeStart + 2)
  }
  const homeThreePointer = (e) => {
    homeScore(homeStart + 3)
 }
 const homeFreeThrow = (e) => {
   homeScore(homeStart + 1)
 }
 const awayTwoPointer = (e) => {
  awayScore(awayStart + 2)
}
const awayThreePointer = (e) => {
  awayScore(awayStart + 3)
}
const awayFreeThrow = (e) => {
  awayScore(awayStart + 1)
}





  return (
    <div className="container">
        <div className="app">
      <div className="time">
      </div>
      <div className="row">
        
      </div>
    </div>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lakers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeStart}</div>
          </div>
          <div className="timer">{seconds}</div>
          <div className="away">
            <h2 className="away__name">Celtics</h2>
            <div className="away__score">{awayStart}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__Freethrow" onClick={homeFreeThrow}>Home Free Throw</button>

          <button className="homeButtons__twoPointer" onClick={homeTwoPointer}>Home Two Pointer</button>
          <button className="homeButtons__threepointer" onClick={homeThreePointer}>Home Three Pointer</button>
          <div className="shotClockButtons">
    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>Shot Clock
          {isActive ? ' Pause' : ' Start'}
        </button>
        <button className="button" onClick={reset}>
          Shot Clock Reset
        </button>
        </div>
        </div>
        <div className="awayButtons">
        <button className="homeButtons__freeThrow" onClick={awayFreeThrow}>Away Free Throw </button>

          <button className="awayButtons__twoPointer" onClick={awayTwoPointer}>Away Two Pointer</button>
          <button className="awayButtons__threePointer" onClick={awayThreePointer}>Away Three Pointer</button>
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>Game Clock 
          {isActive ? ' Pause' : ' Start'}
        </button>
        <button className="button" onClick={reset}>
          Game Clock Reset
        </button>
        </div>
       
      </section>
    </div>
  );
}

export default App;
