import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import aboutUsStyle from "../../../styles/aboutUsStyle.jsx"

class AboutUs extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Who Are We?</h2>
                        <h4 className={classes.description}>
                        We are a family-oriented church that believes in the supernatural ministry of Jesus Christ that is ever present among His people. <br/>
                        We believe that every individual represents an opportunity for HOPE to be introduced and renewed in each life.
                        Our prayer is that the Lord Jesus will strengthen you and the anointing of this ministry will flow to every person who has joined us at this web site. <br/>
                        May God bless you and your family and welcome to LIVING HOPE.
                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutUsStyle)(AboutUs);