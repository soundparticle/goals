import { get, post } from './request';

const URL = '/api';
const GOALS_URL = `${URL}/goals`;
const AUTH_URL = `${URL}/auth`;

export const getAllGoals = () => get(GOALS_URL);
export const getGoals = id => get(`${GOALS_URL}/${id}`);
export const postGoal = data => post(`${GOALS_URL}`, data);
export const toggleGoal = id  => post(`${GOALS_URL}/${id}`);
export const getUserGoals = () => get(`${URL}/users`);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});