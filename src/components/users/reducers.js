export const USERS_LOAD = 'USERS_LOAD';

export const getUsersGoals = state => state.users;

export function users(state = [], { type, payload }) {
  switch(type) {
    case USERS_LOAD:
      return payload;
    default:
      return state;
  }
}