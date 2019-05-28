import React, { Component } from 'react';
import classes from './Body.module.css';
import Landing from '../Landing/Landing';
import Phase1 from  '../Phase1/Phase1';
class Body extends Component {
    render() {
        return (
            <div className={classes.container}>
                <Landing />
                <Phase1 />
            </div>
        );
    }
}

export default Body;