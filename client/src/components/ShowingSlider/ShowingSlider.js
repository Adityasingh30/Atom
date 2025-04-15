import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ShowingSlider.css'; // Add custom styles for hover etc.

const ShowingSlider = ({ title, movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#111', color: '#fff' }}>
      <h2 style={{
        marginBottom: '24px',
        fontSize: '28px',
        fontWeight: '600',
        borderLeft: '4px solid #ff4c4c',
        paddingLeft: '12px'
      }}>
        {title}
      </h2>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie._id} style={{
            padding: '0 10px',
            margin: '10px',
          }}>
            <div style={{
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              borderRadius: '10px',
              background: '#1a1a1a',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}>
              <img
                className="slider-image"
                src={movie.posterUrl}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
              <h4 style={{
                textAlign: 'center',
                marginTop: '8px',
                color: '#fff',
                fontWeight: 'bold',
                padding: '10px 0',
                backgroundColor: '#222'
              }}>
                {movie.title}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ShowingSlider.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default ShowingSlider;
