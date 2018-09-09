import { USERS_LOAD } from './user-reducers';
import { getUsersGoals } from '../../services/api';

export const loadUsersGoals = () => {
  return {
    type: USERS_LOAD,
    payload: getUsersGoals()
  };
};