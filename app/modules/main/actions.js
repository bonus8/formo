import { createAction } from 'redux-actions';
import * as constants from './constants';



export const requestLogin = createAction(
  constants.REQUEST_LOGIN
);

export const receiveLogin = createAction(
  constants.RECEIVE_LOGIN,
  payload => payload
);

export const setSession = createAction(
  constants.SET_SESSION,
  payload => payload
);

export const clearSession = createAction(
  constants.CLEAR_SESSION
);
