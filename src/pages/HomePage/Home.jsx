import React, {Component} from 'react';

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import HeaderBar from './../../components/Header/HeaderBar.jsx';
import landingPageStyle from "../../styles/landingPage.jsx";
import AboutUs from "./Sections/AboutUs.jsx"
import WhatWeBelieve from './Sections/WhatWeBelieve.jsx';
import OurServiceTimes from './Sections/OurServiceTimes.jsx'
import Footer from '../../components/Footer/Footer.jsx'

class Home extends Component {
render() {
    const { classes } = this.props;
    return (
        <div>
            <HeaderBar/>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <AboutUs />
                    <WhatWeBelieve />
                    <OurServiceTimes />
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default withStyles(landingPageStyle)(Home);