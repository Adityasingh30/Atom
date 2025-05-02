import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '80%',
    minHeight: '60vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    overflow: 'hidden',
    borderRadius: 12,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.4,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    width: '40%',
    height: '100%',
    background:
      'linear-gradient(to right, rgba(0,0,0,.9) 75%, transparent 100%)',
    //background: 'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.9))',
    zIndex: 2,
  },
  content: {
    position: 'relative',
    zIndex: 3,
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: theme.palette.common.white,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  infoBox: {
    marginBottom: theme.spacing(1),
  },
  label: {
    fontWeight: 600,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      minHeight: '40vh',
    },
    title: {
      fontSize: '1.5rem',
    },
    content: {
      padding: theme.spacing(2),
    },
  },
}));

export default function MovieInfo({ movie }) {
  const classes = useStyles();

  if (!movie) return <Typography variant="h5" align="center">Loading movie info...</Typography>;

  return (
    <Grid item xs={12}>
      <Box className={classes.root}>
        <Box
          className={classes.background}
          style={{ backgroundImage: `url(${movie.image})` }}
        />
        <Box className={classes.overlay} />
        <Box className={classes.content}>
          <Typography className={classes.title}>{movie.title || 'Untitled Movie'}</Typography>

          {movie.director && (
            <div className={classes.infoBox}>
              <Typography className={classes.label} variant="subtitle2">Director:</Typography>
              <Typography variant="body2">{movie.director}</Typography>
            </div>
          )}

          {movie.cast && (
            <div className={classes.infoBox}>
              <Typography className={classes.label} variant="subtitle2">Cast:</Typography>
              <Typography variant="body2">{movie.cast}</Typography>
            </div>
          )}

          {movie.genre && (
            <div className={classes.infoBox}>
              <Typography className={classes.label} variant="subtitle2">Genre:</Typography>
              <Typography variant="body2">{movie.genre}</Typography>
            </div>
          )}
        </Box>
      </Box>
    </Grid>
  );
}
