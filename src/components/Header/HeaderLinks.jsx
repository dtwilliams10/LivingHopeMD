/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Fingerprint, StorageTwoTone, VpnKeyTwoTone, PresentToAllTwoTone } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "../../styles/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
        noLiPadding
          buttonText="God"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={VpnKeyTwoTone}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
            Home
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            About Us
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Our History
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Our Vision
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Our Staff
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Contact Us
            </Link>
          ]}/>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
        noLiPadding
        buttonText="Community"
        buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={PresentToAllTwoTone}
          dropdownList={[
            <Link to="/God" className={classes.dropdownLink}>
            Fellowship Groups
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Children
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Hyphen Young Adults
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Airo Youth
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Ladies
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Men
            </Link>
          ]}/>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
        noLiPadding
        buttonText="Growth"
        buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
        buttonIcon={StorageTwoTone}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
          Discipleship
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
          Media
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
          Donations
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
          Morning Momentum
          </Link>
        ]}/>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Ministries"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Fingerprint}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
            Events
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Calendar
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            News
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
            Right Now Ministry
            </Link>
          ]}/>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
