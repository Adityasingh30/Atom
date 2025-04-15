import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../store/actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  withStyles,
  Paper,
  IconButton,
  Typography,
  TextField,
  Checkbox,
  Button
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

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
    marginBottom: theme.spacing(2),
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 700,
    fontSize: '1.8rem',
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    color: '#555',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  policy: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  policyText: {
    fontSize: '0.9rem',
  },
  policyUrl: {
    textDecoration: 'underline',
    color: theme.palette.primary.main,
  },
  registerButton: {
    marginBottom: theme.spacing(2),
  },
  login: {
    textAlign: 'center',
  },
  loginUrl: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
});

class Register extends Component {
  state = {
    values: {
      name: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      image: null,
      policy: false
    }
  };

  componentDidUpdate(prevProps) {
    const { isAuthenticated, history } = this.props;
    if (prevProps.isAuthenticated !== isAuthenticated || isAuthenticated)
      history.push('/');
  }

  handleBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleFieldChange = (field, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [field]: value
      }
    }));
  };

  handleRegister = () => {
    const newUser = this.state.values;
    this.props.register(newUser);
  };

  render() {
    const { classes } = this.props;
    const { values } = this.state;
    const isValid = values.policy;

    return (
      <div className={classes.root}>
        <Paper className={classes.paperWrapper}>
          <div className={classes.header}>
            <IconButton
              className={classes.backButton}
              onClick={this.handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography className={classes.title}>Create Your Account</Typography>
          </div>
          <Typography className={classes.subtitle}>
            It only takes a few minutes to get started.
          </Typography>
          <form className={classes.form}>
            <div className={classes.fields}>
              <TextField
                label="Full Name"
                variant="outlined"
                value={values.name}
                onChange={e => this.handleFieldChange('name', e.target.value)}
              />
              <TextField
                label="Username"
                variant="outlined"
                value={values.username}
                onChange={e => this.handleFieldChange('username', e.target.value)}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                value={values.email}
                onChange={e => this.handleFieldChange('email', e.target.value)}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                value={values.phone}
                onChange={e => this.handleFieldChange('phone', e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={e => this.handleFieldChange('password', e.target.value)}
              />
            </div>

            <div className={classes.policy}>
              <Checkbox
                checked={values.policy}
                color="primary"
                onChange={() =>
                  this.handleFieldChange('policy', !values.policy)
                }
              />
              <Typography className={classes.policyText}>
                I have read the{' '}
                <Link className={classes.policyUrl} to="#">
                  Terms and Conditions
                </Link>.
              </Typography>
            </div>

            <Button
              className={classes.registerButton}
              variant="contained"
              fullWidth
              size="large"
              disabled={!isValid}
              onClick={this.handleRegister}
              style={{ backgroundColor: '#1a237e', color: '#fff' }} 
            >
              Register Now
            </Button>

            <Typography className={classes.login}>
              Already have an account?{' '}
              <Link className={classes.loginUrl} to="/login">
                Login
              </Link>
            </Typography>
          </form>
        </Paper>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated
});

export default withStyles(styles)(
  connect(mapStateToProps, { register })(Register)
);
