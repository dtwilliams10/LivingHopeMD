import React, {Component} from 'react';

class OurHistory extends Component {
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
                <Parallax filter image={require("../../assets/img/aaron-burden-759770-unsplash.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Welcome to Living Hope Church</h1>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                    </div>
                </div>
        </div>
        )
    }
}

export default OurHistory;