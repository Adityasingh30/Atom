export default theme => ({
  container: {
    display: 'flex',
    alignItems: 'center', // Better vertical centering
    justifyContent: 'space-between', // Space between heading and button
    padding: theme.spacing(2, 3),
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: theme.palette.common.white,
    margin: 0,
    textTransform: 'capitalize',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    letterSpacing: '1px',
  },
  button: {
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: '25px',
    padding: '8px 24px',
    fontWeight: 600,
    fontSize: '1rem',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      transform: 'scale(1.05)',
    },
  },
  carousel: {
    width: '90%',
    height: '100%',
    margin: 'auto',
    boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
    borderRadius: '20px',
    background: `linear-gradient(180deg, rgba(20, 20, 20, 0.7) 0%, rgba(20, 20, 20, 0.9) 100%)`, // More cinematic
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)',
    borderRadius: '20px',
    zIndex: 2,
  },
  arrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.6)',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(255,255,255,0.2)',
      transform: 'translateY(-50%) scale(1.1)',
    },
    '&.prevArrow': {
      left: 10,
    },
    '&.nextArrow': {
      right: 10,
    },
  },
  slider: {
    '& .slick-slide': {
      padding: theme.spacing(2),
      transition: 'transform 0.4s ease, opacity 0.4s ease',
      transform: 'scale(0.9)',
      opacity: 0.7,
    },
    '& .slick-slide.slick-active': {
      transform: 'scale(1)',
      opacity: 1,
    },
    '& .slick-slide:hover': {
      transform: 'scale(1.05)',
      zIndex: 4,
    },
  },
  movieCard: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
});
