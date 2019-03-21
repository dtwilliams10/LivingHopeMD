import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import ourServiceTimesStyle from '../../../styles/ourServiceTimesStyle.jsx';

class OurServiceTimes extends Component {
    render (){
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>When Do We Worship?</h2>
                        <h4 className={classes.description}>
                        We gather twice a week for fellowship and biblical instruction.<br/>
                        Wednesday nights at 6PM for prayer with bible study starting at 7PM.<br/>
                        Sunday Mornings we come together at 9AM for prayer with Sunday School starting at 10AM. <br/>
                        Sunday Worship service begins at 11AM.
                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(ourServiceTimesStyle)(OurServiceTimes)