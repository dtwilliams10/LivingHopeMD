import React, {Component} from 'react';

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import landingPageStyle from "../../styles/landingPage.jsx";
import Header from "../../components/Header/Header.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import WhatWeBelieve from '../HomePage/Sections/WhatWeBelieve.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import HeaderLinks from '../../components/Header/HeaderLinks.jsx';

class God extends Component {
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
            <Parallax filter image={require("../../assets/img/cover-small.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Welcome to Living Hope Church</h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <WhatWeBelieve />
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default withStyles(landingPageStyle)(God);