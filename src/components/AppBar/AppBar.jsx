import React from 'react';
import PropTypes from 'prop-types';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const theme = createMuiTheme({
  palette: {
    primary: grey
  },
  typography: {
    useNextVariants: true
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
          <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className="App">
          <Toolbar>
            <Button color="inherit" component={Link} to="/God">
              God
            </Button>
            <Button color="inherit" component={Link} to="/Community">
              Community
            </Button>
            {/* TODO: Need to change this to point to the new page. */}
            <Button color="inherit" component={Link} to="/Growth">
              Growth
            </Button>
            <Button color="inherit" component={Link} to="/Ministry">
             Ministry
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
