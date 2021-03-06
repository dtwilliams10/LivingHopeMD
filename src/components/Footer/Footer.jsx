/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

import footerStyle from "../../styles/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <p className={classes.right}>
                Living Hope UPC <br/>
                301-862-9805 <br/>
                21650 Chancellors Run Road <br/>
                Great Mills, MD 20634
              </p>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <p className={classes.right}>
                About us
              </p>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <p className={classes.right}>
                Blog
              </p>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <p className={classes.right}>
                Licenses
              </p>
            </ListItem>  */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {"2014 - "} { 1900 + new Date().getYear()} Living Hope Church - All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
