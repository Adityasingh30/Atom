import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  TextField,
  Typography,
  Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { login } from '../../../../store/actions';
import { history } from '../../../../utils';
import './LoginForm.css'; 


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #141E30, #243B55)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(5),
    maxWidth: 500,
    width: '100%',
    backgroundColor: '#ffffffee',
    borderRadius: theme.spacing(2),
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(6px)',
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 700,
    textAlign: 'center',
    color: '#1a237e',
  },
  textField: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  loginButton: {
    marginTop: theme.spacing(4),
    width: '100%',
    padding: theme.spacing(1.5),
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: theme.spacing(1),
    backgroundColor: '#1a237e',
    color: '#fff',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#0d133d',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    },
  },
  register: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  registerUrl: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginLeft: theme.spacing(0.5),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function LoginForm({ isAuthenticated, user, redirect, login }) {
  const classes = useStyles();
  const [values, setValues] = useState({ username: '', password: '' });

  useEffect(() => {
    if (isAuthenticated && redirect) {
      if (user?.role === 'superadmin') {
        history.push('/admin/dashboard');
      } else {
        history.push('/');
      }
    }
  }, [isAuthenticated, user, redirect]);

  const handleFieldChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    login(values.username, values.password);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
        <Typography className={classes.title} variant="h4">
          Welcome Back!!!
        </Typography>
        

        <TextField
          className={classes.textField}
          label="Username"
          name="username"
          onChange={handleFieldChange}
          value={values.username}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="Password"
          name="password"
          type="password"
          onChange={handleFieldChange}
          value={values.password}
          variant="outlined"
        />

        <Button
          className={classes.loginButton}
          color="primary"
          onClick={handleSubmit}
          variant="contained"
        >
          Login Now
        </Button>

        <Typography className={classes.register} variant="body2">
          Don&apos;t have an account?
          <Link className={classes.registerUrl} to="/register">
            Register
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authState.isAuthenticated,
  user: state.authState.user,
});

export default connect(mapStateToProps, { login })(LoginForm);
