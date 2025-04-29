import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Box, Grid, Typography, Fade, Grow } from '@material-ui/core';
import { getMovies, getShowtimes, getMovieSuggestion } from '../../../store/actions';
import MovieCarousel from '../components/MovieCarousel/MovieCarousel';
import MovieBanner from '../components/MovieBanner/MovieBanner';
import styles from './styles';

class HomePage extends Component {
  componentDidMount() {
    const {
      movies,
      showtimes,
      suggested,
      getMovies,
      getShowtimes,
      getMovieSuggestion,
      user
    } = this.props;
    if (!movies?.length) getMovies();
    if (!showtimes?.length) getShowtimes();
    if (user?.username && !suggested.length) {
      getMovieSuggestion(user.username);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.props.user &&
        this.props.getMovieSuggestion(this.props.user.username);
    }
  }

  render() {
    const {
      classes,
      randomMovie,
      comingSoon,
      nowShowing,
      suggested
    } = this.props;

    return (
      <Grow in timeout={800}>
        <Fragment>
          {/* Movie Banner */}
          <Fade in timeout={1000}>
            <Box>
              <MovieBanner movie={randomMovie} height="100vh" />
            </Box>
          </Fade>

          {/* Spacer */}
          <Box mt={0} />

          {/* Suggested Movies Section */}
          <Box py={5} bgcolor="#d5dbdb">
            <Typography variant="h4" align="center" gutterBottom>
              
            </Typography>

            {suggested?.length ? (
              <MovieCarousel
                carouselClass={classes.carousel}
                title='Suggested for You'
                movies={suggested}
                autoplay
              />
            ) : (
              <Box textAlign="center" mt={4}>
                <Typography variant="subtitle1" color="textSecondary">
                  No suggestions yet. Watch more movies to get personalized recommendations!
                </Typography>
              </Box>
            )}
          </Box>

          {/* Now Showing Section */}
          <Box py={5}>
            <Typography variant="h4" align="center" gutterBottom>
              
            </Typography>
            <MovieCarousel
              carouselClass={classes.carousel}
              title="Now Showing"
              to="/movie/category/nowShowing"
              movies={nowShowing}
              autoplay
            />
          </Box>

          {/* Coming Soon Section */}
          <Box py={5} bgcolor="#d5dbdb">
            <Typography variant="h4" align="center" gutterBottom>
             
            </Typography>
            <MovieCarousel
              carouselClass={classes.carousel}
              title="Coming Soon"
              to="/movie/category/comingSoon"
              movies={comingSoon}
              autoplay
            />
          </Box>

          {/* Feature Grid Section */}
          <Box py={5}>
            <Grid container style={{ height: 500 }}>
              <Grid
                item
                xs={12}
                md={7}
                style={{
                  background: '#131334',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2rem',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h3" gutterBottom>
                  Join the Ultimate Movie Experience
                </Typography>
                <Typography variant="h6" color="inherit">
                  Book your tickets, rate your favorites, and get exclusive rewards!
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                style={{
                 // background: '#010025',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1745232997474-3a066feac313?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </Box>
        </Fragment>
      </Grow>
    );
  }
}

HomePage.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  latestMovies: PropTypes.array.isRequired,
};

const mapStateToProps = ({ movieState, showtimeState, authState }) => ({
  movies: movieState.movies,
  randomMovie: movieState.randomMovie,
  latestMovies: movieState.latestMovies,
  comingSoon: movieState.comingSoon,
  nowShowing: movieState.nowShowing,
  showtimes: showtimeState.showtimes,
  suggested: movieState.suggested,
  user: authState.user,
});

const mapDispatchToProps = { getMovies, getShowtimes, getMovieSuggestion };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage));
