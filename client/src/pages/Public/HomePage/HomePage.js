// Import Slider and Arrow Icons from Material UI
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Box, Grid, Typography, Fade, Grow } from '@material-ui/core';
import { getMovies, getShowtimes, getMovieSuggestion } from '../../../store/actions';
import MovieCarousel from '../components/MovieCarousel/MovieCarousel';
import MovieBanner from '../components/MovieBanner/MovieBanner';
import Slider from 'react-slick'; // Import the Slider component
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

  getRandomMovies = (movies, count = 5) => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

getSuggestedMovies = () => {
  const { suggested, nowShowing, latestMovies } = this.props;

  if (suggested && suggested.length > 0) {
    return suggested;
  }

  const fallbackSource = nowShowing.length ? nowShowing : latestMovies;
  return this.getRandomMovies(fallbackSource, 5);
};


  render() {
    const {
      classes,
      randomMovie,
      comingSoon,
      nowShowing,
      suggested
    } = this.props;

    const settings = {
      centerMode: true,
      centerPadding: '15%',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      swipeToSlide: true,
      nextArrow: <ArrowForwardIos color="inherit" fontSize="large" />,
      prevArrow: <ArrowBackIos color="inherit" fontSize="large" />,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };

    return (
      <Grow in timeout={800}>
        <Fragment>
          {/* Movie Banner Slider */}
          <Fade in timeout={1000}>
          <Box className={`${classes.bannerSlider} slick-custom`}>
          <Slider {...settings}>
  {this.getRandomMovies(nowShowing).map((movie) => (
    <div key={movie._id}>
      <MovieBanner movie={movie} />
    </div>
  ))}
</Slider>

          </Box>
          </Fade>
          {/* Spacer */}
          <Box mt={0} />

          {/* Suggested Movies Section */}
          <Box py={5} bgcolor="#d5dbdb">
            <Typography variant="h4" align="center" gutterBottom>
              
            </Typography>

           <MovieCarousel
  carouselClass={classes.carousel}
  title="Suggested for You"
  movies={this.getSuggestedMovies()}
  autoplay
/>

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
          <Box
  position="relative"
  py={10}
  px={3}
  style={{
    backgroundImage:
      'url(https://plus.unsplash.com/premium_photo-1709594070896-fc3869d4dcd6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    minHeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
  }}
>
  <Box
    position="absolute"
    top={0}
    left={0}
    width="100%"
    height="100%"
    style={{
      background: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    }}
  />

  <Box position="relative" zIndex={2} textAlign="center" maxWidth={700} px={2}>
  <Typography
  variant="h2"
  gutterBottom
  style={{
    fontFamily: `'Cinzel', serif`, // Cinematic serif font
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textShadow: '2px 3px 6px rgba(0,0,0,0.7)',
  }}
>
  Step Into the World of Cinematic Magic
</Typography>

<Typography
  variant="h4"
  gutterBottom
  style={{
    fontFamily: `'Open Sans', sans-serif`,
    fontWeight: 400,
    letterSpacing: 1,
    color: '#f4d03f', // Highlighted subtitle
    textShadow: '1px 2px 4px rgba(0,0,0,0.6)',
  }}
>
  Book your movie tickets for the latest blockbusters and upcoming hits—right at your nearest cinema.
</Typography>

<Typography
  variant="body1"
  style={{
    fontFamily: `'Roboto', sans-serif`,
    lineHeight: 1.8,
    fontSize: '1.1rem',
    maxWidth: 650,
    margin: '0 auto',
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
  }}
>
  Atomic connects you to the best theaters around, offering a seamless booking experience,
  real-time showtimes, and instant confirmations. Don’t miss your next big-screen adventure—reserve your seat now!
</Typography>

  </Box>
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
