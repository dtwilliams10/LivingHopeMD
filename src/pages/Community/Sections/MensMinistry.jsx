import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import whatWeBelieveStyle from "../../../styles/whatWeBelieveStyle.jsx"

class MensMinistry extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Men's Ministry</h2>
                        <h4 className={classes.description}>
                        "The way you change the heart of a community is to change the heart of its men."-Dr. Jack Graham
In today's culture, it's increasingly important for men to honor God with their hearts and lives. This is why at Living Hope we believe in equipping men to be spiritual leaders in their homes, in the church, and in their businesses.
It is the goal of the Men's Ministry to provide opportunities for fellowship and events for men of all ages. Our events are fun, entertaining and they provide ministry for all men.
Here at Living Hope, men are given the opportunity to serve God, one another, the Church as well as grow in the grace and knowledge of the Lord Jesus Christ.
For more information contact our Specialized Ministry Director, <a className={classes.link} href="mailto:specializedministry@livinghopemd.com">Jose Alberty</a>.
                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(whatWeBelieveStyle)(MensMinistry);
