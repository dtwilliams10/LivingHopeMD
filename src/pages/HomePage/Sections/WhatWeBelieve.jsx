import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from '../../../components/Grid/GridContainer.jsx';
import GridItem from '../../../components/Grid/GridItem.jsx';
import whatWeBelieveStyle from "../../../styles/whatWeBelieveStyle.jsx"

class WhatWeBelieve extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>What Do We Believe?</h2>
                        <h4 className={classes.description}>
                        Living Hope is a church striving to become a 21st Century Apostolic Church.  We are founded upon the belief that the Bible is the inspired, infallible Word of God.

We believe in the great commission and are endeavoring to share the Gospel of Jesus Christ with love, mercy and compassion.

We believe there is only one God (<a href="http://www.biblegateway.com/passage/?search=Deuteronomy%206:4%20;&version=31;" target="_blank" rel="noopener noreferrer">Deuteronomy 6:4</a>). He is the creator of heaven and earth, and of all living beings. He has revealed Himself to humanity as the Father (Creator), as the Son (Savior), and as the Holy Ghost (indwelling Spirit).

We believe in water baptism by immersion in the Name of the Lord Jesus Christ for the remission of sin.  Through baptism we identify with the death, burial and resurrection of Jesus Christ (Romans 6:3-6; Colossians 2:11-14; Acts 2:38).

We believe in the Baptism of the Holy Spirit with the initial sign of speaking in other tongues (Acts 2:4).

We believe in the manifestation of the gifts of the Holy Spirit. He ministers to His people through tongues, interpretation of tongues, prophecy; words of knowledge and wisdom, discerning of spirits, faith, working of miracles, healing, helps and government (Mark 16:15-18; Acts 5:16; 2 Corinthians 12:1-11).
                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(whatWeBelieveStyle)(WhatWeBelieve);