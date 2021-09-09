import * as React from "react";
import jsDrumKitGif from "../../images/js-drum-kit.gif";
import cssJsClockGif from "../../images/css-js-clock.gif";
import * as classes from "./JS30Challenges.module.css";

const JS30Challenges = () => {
  return (
    <div>
      <h3>JS Powered Drumkit</h3>
      <img
        src={jsDrumKitGif}
        className={classes.imgContainer}
        alt="javascript powered drumkit gif in action"
      />
      <h3>JS and CSS Clock</h3>
      <img
        src={cssJsClockGif}
        className={classes.imgContainer}
        alt="javascript powered clock that updates css live"
      />
    </div>
  );
};

export default JS30Challenges;
