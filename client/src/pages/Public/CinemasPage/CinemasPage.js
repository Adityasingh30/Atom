import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography, Container } from '@material-ui/core';
import { getCinemas } from '../../../store/actions';
import CinemaCard from '../components/CinemaCard/CinemaCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 2),
    backgroundColor: '#1976d2', // dark blue-gray
    minHeight: '100vh',
    color: '#E2E8F0' // light gray text
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 600,
    fontFamily: 'Georgia, serif',
    lineHeight: '3.2rem',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    color: '#fff' // cyan-400
  },
  gridContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  noCinemas: {
    textAlign: 'center',
    color: '#94A3B8',
    marginTop: theme.spacing(5)
  }
}));

function CinemasPage(props) {
  const classes = useStyles();
  const { cinemas, getCinemas } = props;

  useEffect(() => {
    if (!cinemas.length) getCinemas();
  }, [cinemas, getCinemas]);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography className={classes.title} variant="h2">
        Our Cinemas
      </Typography>

      {cinemas.length > 0 ? (
        <Grid container spacing={4} className={classes.gridContainer} justifyContent="center">
          {cinemas.map(cinema => (
            <Grid key={cinema._id} item xs={12} sm={6} md={4} lg={3}>
              <CinemaCard cinema={cinema} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" className={classes.noCinemas}>
          No cinemas available at the moment. Please check back later.
        </Typography>
      )}
    </Container>
  );
}

const mapStateToProps = ({ cinemaState }) => ({
  cinemas: cinemaState.cinemas
});

const mapDispatchToProps = { getCinemas };

export default connect(mapStateToProps, mapDispatchToProps)(CinemasPage);
