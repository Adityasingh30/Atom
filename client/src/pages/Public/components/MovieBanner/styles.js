import color from "@material-ui/core/colors/amber";

export default theme => ({
  movieHero: {
    position: 'relative',
    height: '75vh', // for full-screen banner
    width: '100%',
    zIndex: 0,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(8) // match your header height
  },
blurBackground: {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
  height: '100%',
  width: '80%',
  backgroundSize: '60% 100%',  // 👈 shows full image
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.palette.background.dark // fill empty areas
} ,
  infoSection: {
    position: 'relative',
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundBlendMode: 'multiply',
    background:
      'linear-gradient(to right, rgba(0,0,0,.9) 25%, transparent 100%)',
    zIndex: 2
  },
  movieHeader: {
    position: 'relative',
    padding: theme.spacing(3),
    maxWidth: '60%'
  },
  tag: {
    padding: theme.spacing(0.3, 3),
    marginRight: theme.spacing(1),
    border: '1px solid rgba(255,255,255,0.9)',
    borderRadius: 25
  },
  movieTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
    color: '#fff',
    textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
    marginBottom: theme.spacing(2),
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
  descriptionText: {
    color: '#cfd6e1',
    padding: theme.spacing(2, 0),
    maxWidth: '60%'
  },
  footer: {
    position: 'absolute',
    left: theme.spacing(4),
    bottom: theme.spacing(2),
    zIndex: 2
  },
  icons: {
    display: 'inline-block',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.4)',
    margin: theme.spacing(0, 1),
    transition: 'all 0.3s',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
      transform: 'scale(1.25)',
      transition: 'all 0.3s',
      transitionDelay: '0.15s'
    }
  },
  movieActions: { position: 'absolute', bottom: 0, right: 0 },
  button: {
    width: 200,
    height: 70,
    backgroundColor: '#CF0F47',
    color: '#fffff',
    borderRadius: 0,
    zIndex: 2
  },
  learnMore: { color: theme.palette.common.white },
  buttonIcon: { marginLeft: theme.spacing(2) },
  [theme.breakpoints.down('sm')]: {
    infoSection: {
      background:
        'linear-gradient(to right, rgba(0,0,0,.9) 70%, transparent 100%)'
    },
    movieHeader: { maxWidth: '90%' },
    movieTitle: {
      maxWidth: '100%',
      fontSize: '16px'
    },
    descriptionText: {
      maxWidth: '100%',
      fontSize: '12px'
    },
    tag: { padding: theme.spacing(0.3, 1), margin: theme.spacing(1, 1, 1, 0) },
    movieActions: { display: 'flex', width: '100%' },
    button: {
      flex: 1,
      fontSize: 13,
      height: 'auto',
      padding: theme.spacing(2)
    },
    footer: {
      left: theme.spacing(1),
      bottom: theme.spacing(12)
    }
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#CF0F47',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    borderRadius: '8px',
    boxShadow: '0px 4px 15px rgba(207, 15, 71, 0.4)',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#a10c38',
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 20px rgba(207, 15, 71, 0.6)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  
});
