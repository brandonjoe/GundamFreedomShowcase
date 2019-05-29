import React, { Component } from "react";
import classes from "./Phase3.module.css";
import Gal from './Gallery'
class Phase3 extends Component {

  render() {
    return (
<div className={classes.container}>
<div className={classes.block} />
<div className={classes.title}>Gallery</div>
    <div className={classes.main}>
    <Gal />
    </div>
        
</div>
  
    );
  }
}

export default Phase3;
