import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import MovieCardSimple from '../MovieCardSimple/MovieCardSimple';
import MovieBanner from '../MovieBanner/MovieBanner'; // ✅ Import this
import styles from './styles';

const useStyles = makeStyles(styles);

function NextArrow(props) {
  const { currentSlide, slideCount, onClick } = props;
  const classes = useStyles({ currentSlide, slideCount });
  return (
    <div className={classnames(classes.arrow, 'nextArrow')} onClick={onClick}>
      <ArrowForwardIos color="inherit" fontSize="large" />
    </div>
  );
}

function PrevArrow(props) {
  const { currentSlide, onClick } = props;
  const classes = useStyles({ currentSlide });
  return (
    <div className={classnames(classes.arrow, 'prevArrow')} onClick={onClick}>
      <ArrowBackIos color="inherit" fontSize="large" />
    </div>
  );
}

// ✅ Added: useBanner and fullDescription props
function MovieCarousel({ carouselClass, movies = [], title, to = null, autoplay = false, useBanner = false, fullDescription = false }) {
  const classes = useStyles();
  const settings = {
    centerMode: !useBanner,
    infinite: true,
    speed: 500,
    slidesToShow: useBanner ? 1 : 4,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: useBanner
      ? [
          { breakpoint: 1600, settings: { slidesToShow: 1 } },
          { breakpoint: 1250, settings: { slidesToShow: 1 } },
          { breakpoint: 750, settings: { slidesToShow: 1 } }
        ]
      : [
          { breakpoint: 1600, settings: { slidesToShow: 3 } },
          { breakpoint: 1250, settings: { slidesToShow: 2 } },
          { breakpoint: 750, settings: { slidesToShow: 1 } }
        ]
  };

  if (!movies.length) return null;
  return (
    <div className={carouselClass}>
      {title && (
        <div className={classes.container}>
          <Typography className={classes.h2} variant="h2" style={{ color: '#2D120180' }}>
            {title}
          </Typography>
          {to && (
            <Link to={to} style={{ textDecoration: 'none' }}>
              <Button className={classes.button} color="primary">
                Explore All
              </Button>
            </Link>
          )}
        </div>
      )}
      <Slider {...settings} className={classes.slider}>
        {movies.map((movie) =>
          useBanner ? (
            <div key={movie._id}>
              <MovieBanner movie={movie} fullDescription={fullDescription} />
            </div>
          ) : (
            <div key={movie._id}>
              <MovieCardSimple movie={movie} />
            </div>
          )
        )}
      </Slider>
    </div>
  );
}

export default MovieCarousel;
