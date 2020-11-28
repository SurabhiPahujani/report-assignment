import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * To save some time, below you can find two arrays with the labels,
 * and suggested IDs to use in your code. Feel free to modify them,
 * make them an array of objects, an hashmap, or anything more suitable:
 *
 * ['Examination', 'Clinical History', 'Technique', 'Findings', 'Impressions']
 * ['examination', 'clinicalHistory', 'technique', 'findings', 'impressions']
 */

const sections = [
  "Examination",
  "Clinical History",
  "Technique",
  "Findings",
  "Impressions",
];

const hightlightLabel = (event) => {
  const div = document.getElementById(event.target.id);
  div.style.color = "#ffffff";
  const span = document.getElementById(`${event.target.id}check`);
  span.style.display = "block";
  span.style.color = "#ffffff";
  const circle = document.getElementById(`${event.target.id}circle`);
  circle.style.backgroundColor = "#318bfe";
  const line = document.getElementById(`${event.target.id}line`);
  line.style.borderLeft = "1px solid #318bfe";
};

const removeHightlightLabel = (event) => {
  const div = document.getElementById(event.target.id);
  div.style.color = "#A9A9A9";
};

const submitReport = () => {
  const divs = document.querySelectorAll(".section_text");
  const obj = {};
  for (let i = 0; i < divs.length; i++) {
    obj[divs[i].id] = divs[i].innerHTML;
  }
  toast.success("Your report has been submitted", {
    autoClose: 3000,
    hideProgressBar: true,
  });
  console.log(obj);
};

const App = () => (
  <div id="report">
    {sections.map((x) => (
      <div key={x}>
        <div className="flex">
          <div className="steps">
            <ul>
              <li id={`${x}circle`}>
                <span id={`${x}check`} className="check">
                  &#10003;
                </span>
              </li>
            </ul>
          </div>
          <div className="section" id={x}>
            {x}
          </div>
        </div>
        <div className="flex">
          <div id={`${x}line`} className="line"></div>
          <div
            contentEditable="true"
            className="section_text"
            id={x}
            onFocus={(e) => hightlightLabel(e)}
            onBlur={(e) => removeHightlightLabel(e)}
          ></div>
        </div>
      </div>
    ))}
    <button id="submit" onClick={() => submitReport()}>
      Submit
    </button>
    <ToastContainer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
