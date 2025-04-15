import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Paper,
  IconButton,
  Typography,
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import LoginForm from './components/LoginForm';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #1d2b64, #f8cdda)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  paperWrapper: {
    padding: theme.spacing(4),
    maxWidth: 600,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: theme.spacing(2),
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 700,
    fontSize: '1.5rem',
  },
});

class Login extends Component {
  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paperWrapper}>
          <div className={classes.header}>
            <IconButton
              className={classes.backButton}
              onClick={this.handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography className={classes.title}>
              Welcome Back!!!
            </Typography>
          </div>
          <LoginForm redirect />
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
