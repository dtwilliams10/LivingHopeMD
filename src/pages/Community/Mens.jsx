import React, {Component} from 'react';

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import landingPageStyle from "../../styles/landingPage.jsx";
import Header from "../../components/Header/Header.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import MensMinistry from './Sections/MensMinistry.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import HeaderLinks from '../../components/Header/HeaderLinks.jsx';

class Mens extends Component {
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
            <Parallax filter image={require("../../assets/img/jon-tyson-YtYNavix3pw-unsplash.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Men's Ministry</h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <MensMinistry />
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default withStyles(landingPageStyle)(Mens);
