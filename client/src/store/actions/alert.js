import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
