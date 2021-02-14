import React from "react";
import ReactDOM from "react-dom";
var d = new Date(); // for now
const curr_time = d.getHours(); // => 9
var session = "";
var color = "";
if (curr_time >= 0 && curr_time < 12) {
  session = "morning";
  color = "red";
} else if (curr_time >= 12 && curr_time < 18) {
  session = "afternoon";
  color = "green";
} else {
  session = "evening";
  color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={{ color }}>
    Good {session}
  </h1>,
  document.getElementById("root")
);
