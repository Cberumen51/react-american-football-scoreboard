import React, {useState, useEffect} from "react";
import "./App.css";

const BottomRow = () => {
  const [seconds, setSeconds] = useState(24);
  const[isActive, setIsActive] =useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(24);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 24) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  return (
    <div className="container">


    <div className="app">
      <div className="time">
      </div>
      <div className="row">
        
      </div>
    </div>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Shotclock</h3>
  <div className="down__value">{seconds}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Home Fouls</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Away Fouls</h3>
        <div className="ballOn__value">14</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">1</div>
      </div>
    </div>
    {/* <section className="buttons"> */}
    {/* <div className="shotClockButtons"> */}
    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>Shot Clock
          {isActive ? ' Pause' : ' Start'}
        </button>
        <button className="button" onClick={reset}>
          Shot Clock Reset
        </button>
        {/* </div> */}
         {/* </section> */}
     </div>
  );
};

export default BottomRow;
