import { useState } from "react";
import "../style/forecast.css";

const Forecast = () => {
  return (
    <div>
      <h1 className="forecastHeading">Forecast</h1>
      <div className="containerforecast">
        <div className="gridforecast">
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />

          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />
          <input type="text" className="rounded-textbox" placeholder="air pressure" />

          {/* ... Repeat for the remaining textboxes */}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
