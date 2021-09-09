import * as React from "react";
import jsDrumKitGif from "../../../gifs/js-drum-kit.gif";
import * as classes from './drumkit.module.css'

const JsDrumKit = () => {
  return (
    <div>
      <h3>JS Powered Drumkit</h3>
      <img src={jsDrumKitGif} className={classes.imgContainer} />
    </div>
  );
};

export default JsDrumKit;
