import React, { useState, useEffect } from "react";
import DigitalClock from "./Components/DigitalClock";
import "./App.css";
import { digitalTimeHourMinSec, splitDigitalTime } from "./Utils/utils";

function App() {
  const [time, setTime] = useState(
    splitDigitalTime(digitalTimeHourMinSec().getTime())
  );

  useEffect(function () {
    setInterval(() => {
      setTime(splitDigitalTime(digitalTimeHourMinSec().getTime()));
    }, 1000);
  }, []);

  return (
    <div className="app-container">
      <h1>Berlin Clock</h1>
      <DigitalClock
        seconds={time.seconds}
        minutes={time.minutes}
        hours={time.hours}
      />
    </div>
  );
}

export default App;
