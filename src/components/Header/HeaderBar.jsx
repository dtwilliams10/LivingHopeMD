import React, {Component} from 'react';
import Header from './Header.jsx';
import Parallax from '../Parallax/Parallax.jsx';
import GridContainer from '../Grid/GridContainer.jsx';
import GridItem from '../Grid/GridItem.jsx';
import HeaderLinks from '../Header/HeaderLinks.jsx';
import headerStyle from '../../styles/headerStyle.jsx';
import { withStyles } from '@material-ui/core';


class HeaderBar extends Component {
    render () {
        const { classes, ...rest } = this.props;
        return(
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
            <Parallax filter image={require("../../assets/img/aaron-burden-759770-unsplash.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Welcome to Living Hope Church</h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            </div>
        )
    }

    }

    export default withStyles(headerStyle)(HeaderBar)