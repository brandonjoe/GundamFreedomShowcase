import React, { Component } from 'react';
import classes from './Body.module.css';
import Landing from '../Landing/Landing';
import Phase1 from  '../Phase1/Phase1';
import Phase2 from  '../Phase2/Phase2';
import Phase3 from  '../Phase3/Phase3.js';
import Footer from  '../Footer/Footer.js';
class Body extends Component {
    render() {
        return (
            <div className={classes.container}>
                <Landing />
                <Phase1 />
                <Phase2 />
                <Phase3 />
                <Footer />
            </div>
        );
    }
}

export default Body;