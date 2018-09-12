import { get, post } from './request';

const URL = '/api';
const GOALS_URL = `${URL}/goals`;
const AUTH_URL = `${URL}/auth`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const SIGNIN_URL = `${AUTH_URL}/signin`;
export const signin = credentials => post(`${SIGNIN_URL}`, credentials);
export const signup = credentials => post(`${SIGNUP_URL}`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});

export const getGoals = () => get(`${GOALS_URL}`);
export const postGoal = data => post(`${GOALS_URL}`, data);
export const changeGoalStatus = id => post(`${GOALS_URL}/${id}`);
export const getUsersGoals = () => get(`${URL}/users`);


