export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.borderShadow}`,
    boxShadow: `0 0 35px 0  ${theme.palette.borderShadow}`,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    height: theme.topBar.height,
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%',
    paddingLeft: 0
  },
  brandWrapper: {
    background: theme.palette.default.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '271px',
    height: theme.topBar.height,
    flexShrink: 0
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px', // adds spacing between logo image and text
    paddingLeft: '16px', // shifts the whole logo block to the right
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    letterSpacing: 2,
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    userSelect: 'none'
  },
  
  title: {
    marginLeft: theme.spacing(3),
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 700, // Bold text
    letterSpacing: '1.5px', // More spacing between letters
    color: theme.palette.common.black,
    transition: 'color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.main, // Changes color on hover
      transform: 'scale(1.05)' // Slight zoom effect
    }
  
  
  },
  menuButton: {
    color: theme.palette.common.white,
    marginLeft: '-4px'
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  
  logoImage: {
    height: 38,
    width: 38,
    marginRight: 8,
    borderRadius: '50%', 
    verticalAlign: 'middle',
    objectFit: 'cover',
  },
  
});
