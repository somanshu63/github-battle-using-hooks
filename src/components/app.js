import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import Battle from "./battle";
import Popular from "./popular";

function App() {
  // states
  const [isDay, setIsDay] = useState(true);
  const [isActive, setIsActive] = useState("popular");

  //   function to set active event
  let toggleIsActive = (active) => {
    setIsActive(active);
  };

  //  function to toggle day/night
  let toggleIsDay = () => {
    setIsDay(!isDay);
  };
  return (
    <BrowserRouter>
      <div className={`p-12 ${isDay ? "bg-white" : "dark"}`}>
        {/* header component */}
        <Header
          isDay={isDay}
          toggleIsDay={toggleIsDay}
          isActive={isActive}
          toggleIsActive={toggleIsActive}
        />
        <Route path="/" exact>
          <Popular isDay={isDay} />
        </Route>
        <Route path="/battle">
          <Battle isDay={isDay} />
        </Route>
      </div>
    </BrowserRouter>
  );
}
export default App;
