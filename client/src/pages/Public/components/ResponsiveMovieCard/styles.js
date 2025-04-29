export default theme => ({
  movieCard: {
    position: 'relative',
    height: 450,
    width: 350,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.dark,
    borderRadius: 10,
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.02)',
      transition: 'all 0.4s'
    }
  },
  infoSection: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundBlendMode: 'multiply',
    background: 'linear-gradient(to top, #0d0d0c 20%, transparent 100%)',
    zIndex: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',  // This will make the text stack below the image
    justifyContent: 'flex-start',  // Align text to the top
    padding: theme.spacing(2),  // Add some padding to the text section
  },
  movieHeader: {
    position: 'relative',
    width: '100%',  // Take full width for the text section
    padding: theme.spacing(2),
    marginTop: 'auto',  // Ensures text is at the bottom of the container
  },
  movieTitle: {
    fontSize: '25px',
    fontWeight: 400,
    textTransform: 'capitalize'
  },
  director: {
    color: '#9ac7fa',
    fontWeight: '500',
    fontSize: '16px',
    marginTop: theme.spacing(1)
  },
  duration: {
    display: 'inline-block',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    border: '1px solid rgba(255,255,255,0.13)'
  },
  genre: {
    display: 'inline-block',
    color: '#cee4fd',
    marginLeft: theme.spacing(2)
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    height: '100%',
    right: 0,
    backgroundSize: 'cover !important',
    borderRadius: 11,
    width: '100%',  // Full width for the background image
    backgroundPosition: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    movieCard: {
      width: '90%',
      margin: '0 auto',
      height: 'auto',
    },
    blurBackground: {
      width: '100%',
      backgroundPosition: '50% 50% !important'
    },
    movieHeader: {
      width: '100%',
      marginTop: theme.spacing(3)
    },
  }
});
