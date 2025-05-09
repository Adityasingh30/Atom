import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: 'calc(130vh - 200px)',
    overflowX: 'auto',
    overflowY: 'auto',
    backgroundColor: '#1c1c1e',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    borderRadius: theme.spacing(1),
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '95vw',
    margin: '0 auto',
    position: 'relative',
  },
  inner: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    minWidth: 'max-content',
    padding: '0 50px 70px 50px', // Added bottom padding to make room for screen
    position: 'relative', // Position context for screen
    width: '100%', // Make it take full width of container
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
    minWidth: 'max-content',
  },
  seat: {
    cursor: 'pointer',
    width: 36,
    height: 36,
    margin: theme.spacing(0.5),
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 600,
    transition: 'opacity .2s',
    '&:hover': { opacity: 0.8 },
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: '#eee',
    marginTop: theme.spacing(4),
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 3,
    marginRight: theme.spacing(1),
  },
  screen: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    width: '300px',
    height: '50px',
    backgroundColor: '#999',
    borderTopLeftRadius: '150px',
    borderTopRightRadius: '150px',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.4)',
    textAlign: 'center',
    lineHeight: '50px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '14px',
    zIndex: 1,
  }
}));

export default function BookingSeats({ seats, onSelectSeat }) {
  const classes = useStyles();
  const containerRef = useRef(null);

  // 1) Deep-copy & 2) mark ALL available seats in rows 0 & 1 as recommended
  const computeRecommendedSeats = (seatMatrix) => {
    const recommended = seatMatrix.map((row) => [...row]);

    seatMatrix.forEach((row, rowIndex) => {
      if (rowIndex < 2) {
        row.forEach((seatValue, colIndex) => {
          if (seatValue === 0) {
            recommended[rowIndex][colIndex] = 3;
          }
        });
      }
    });

    return recommended;
  };

  const updatedSeats = computeRecommendedSeats(seats);

  useEffect(() => {
    const c = containerRef.current;
    if (c) c.scrollLeft = (c.scrollWidth - c.clientWidth) / 2;
  }, [seats]);

  const getSeatColor = (s) =>
    ({
      1: 'rgb(65,66,70)',     // Reserved
      2: 'rgb(120,205,4)',    // Selected
      3: 'rgb(14,151,218)',   // Recommended
      0: 'rgb(96,93,169)',    // Available
    }[s]);

  return (
    <>
      <Box ref={containerRef} className={classes.container}>
        <div className={classes.inner}>
          {updatedSeats.map((row, r) => (
            <div key={r} className={classes.row}>
              {row.map((s, i) => (
                <div
                  key={`${r}-${i}`}
                  className={classes.seat}
                  onClick={() => s !== 1 && onSelectSeat(r, i)}
                  style={{
                    backgroundColor: getSeatColor(s),
                    cursor: s === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          ))}
          <Box className={classes.screen}>SCREEN</Box>
        </div>
      </Box>

      {/* Legend */}
      <Box className={classes.legend}>
        {[
          ['Available', 'rgb(96,93,169)'],
          ['Reserved', 'rgb(65,66,70)'],
          ['Selected', 'rgb(120,205,4)'],
          ['Recommended', 'rgb(14,151,218)'],
        ].map(([label, color]) => (
          <div key={label} className={classes.legendItem}>
            <div className={classes.legendColor} style={{ backgroundColor: color }} />
            <Typography variant="body2">{label}</Typography>
          </div>
        ))}
      </Box>
    </>
  );
}