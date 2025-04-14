import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Sample profile pics (you can replace with your own local images or hosted URLs)
const teamMembers = [
  {
    name: 'Aditya Pratap Singh',
    rollno: '21ESKIT007',
    skills: 'Frontend, UI/UX, React, MERN',
    photo: 'https://i.imgur.com/HqWVzd7.jpeg'
  },
  {
    name: 'Aman Jain',
    rollno: '21ESKIT013',
    skills: 'Backend, Express.js, JWT, API Security',
    photo: 'https://i.imgur.com/0sZBEfQ.jpeg'
  },
  {
    name: 'Ayush Jhawar',
    rollno: '21ESKIT028',
    skills: 'Node.js, React, MongoDB',
    photo: 'https://i.imgur.com/iAOQjWS.jpeg'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#1A1A2E',
    minHeight: '100vh',
    color: '#fff'
  },
  card: {
    textAlign: 'center',
    padding: theme.spacing(2),
    borderRadius: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05) translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
    }
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: '0 auto 15px auto',
    border: '3px solid #00BFFF'
  },
  footer: {
    marginTop: theme.spacing(5),
    borderTop: '1px solid #444',
    paddingTop: theme.spacing(2),
    textAlign: 'center'
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Meet the Team
      </Typography>
      <Grid container spacing={4} justify="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className={classes.card}>
              <Avatar src={member.photo} alt={member.name} className={classes.avatar} />
              <CardContent>
                <Typography variant="h5">{member.name}</Typography>
                <Typography variant="h5">{member.rollno}</Typography>
                <Typography variant="h6" color="textSecondary">
                  {member.skills}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className={classes.footer}>
        <Typography variant="body2">
          © Aditya Pratap Singh, Aman Jain, Ayush Jhawar
        </Typography>
        <Typography variant="body2">
          Major Project | <span style={{ color: '#00BFFF' }}>2025</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
