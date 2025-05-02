import React from 'react';
import {
  Grid,
  Box,
  TextField,
  MenuItem,
  Typography,
  Paper
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export default function BookingForm(props) {
  const {
    cinemas,
    showtimes,
    selectedCinema,
    onChangeCinema,
    selectedDate,
    onChangeDate,
    times,
    selectedTime,
    onChangeTime
  } = props;

  const showtime = showtimes.find(
    showtime => showtime.cinemaId === selectedCinema
  );

  if (!cinemas.length)
    return (
      <Box
        display="flex"
        width="100%"
        height="60vh"
        alignItems="center"
        justifyContent="center"
      >
        <Typography align="center" variant="h4" color="textSecondary">
          No Cinema Available.
        </Typography>
      </Box>
    );

  return (
    <Box display="flex" justifyContent="center" px={2} mt={4}>
  <Paper elevation={4} style={{ padding: '2rem', maxWidth: 800, width: '100%' }}>
    <Typography variant="h5" gutterBottom align="center" color="primary">
      Book Show
    </Typography>

    <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              value={selectedCinema}
              label="Select Cinema"
              variant="outlined"
              onChange={onChangeCinema}
            >
              {cinemas.map(cinema => (
                <MenuItem key={cinema._id} value={cinema._id}>
                  {cinema.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {showtime && (
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  fullWidth
                  margin="none"
                  id="start-date"
                  label="Select Date"
                  minDate={new Date(showtime.startDate)}
                  maxDate={new Date(showtime.endDate)}
                  value={selectedDate}
                  onChange={date => onChangeDate(date._d)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          )}

          {selectedDate && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                value={selectedTime}
                label="Select Time"
                variant="outlined"
                onChange={onChangeTime}
              >
                {times.map((time, index) => (
                  <MenuItem key={`${time}-${index}`} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
}
