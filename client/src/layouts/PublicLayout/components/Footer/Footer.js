import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy;Aditya Pratap Singh, Aman Jain, Ayush Jhawar
      </Typography>
      <Typography variant="caption">
        Major Project |{' '}
        <Link href="" target="_blank" rel="noopener">
          2025
        </Link>
      </Typography>
    </div>
  );
}
