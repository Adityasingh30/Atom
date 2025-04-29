export default (theme) => ({
  grid: {
    height: '100%',
  },
  carousel: {
    marginBottom: theme.spacing(6),
  },
  section: {
    padding: theme.spacing(5, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 6),
    },
  },
  sectionTitle: {
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  banner: {
    position: 'relative',
    height: '85vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
      zIndex: 1,
    },
  },
  bannerSlider: {
    position: 'relative',
    height: '75vh', // match the height of banner
    overflow: 'hidden',
    zIndex: 0,
    '& .slick-slide': {
      padding: '0 15px'
    },
    '& .slick-list': {
      margin: '0 -10px'
    }
  }
  
  
});
