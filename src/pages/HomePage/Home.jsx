import React, {Component} from 'react';

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Header from '../../components/Header/Header.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import HeaderLinks from '../../components/Header/HeaderLinks.jsx';
import landingPageStyle from "../../styles/landingPage.jsx";
import AboutUs from "./Sections/AboutUs.jsx"
import WhatWeBelieve from './Sections/WhatWeBelieve.jsx';
import OurServiceTimes from './Sections/OurServiceTimes.jsx'
import Footer from '../../components/Footer/Footer.jsx'

class Home extends Component {
render() {
    const { classes, ...rest } = this.props;
    return (
        <div>
        <Header
                color="transparent"
                brand="Living Hope Church"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
                />
            <Parallax filter image={require("../../assets/img/cover-image.webp")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title} >Welcome to Living Hope Church</h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
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