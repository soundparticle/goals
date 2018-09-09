import { LOGOUT } from '../auth/reducers';

export const GOALS_LOAD = 'GOALS_LOAD';
export const GOAL_LOAD = 'GOAL_LOAD';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';

export const getGoalsById = state => state.goalsById;
export const getGoalList = state => state.goalList;
export const getGoalById = (state, id) => getGoalsById(state)[id];

export const getGoals = state => state.goal;

export function goalsById(state = {}, { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload.reduce((map, goal) => {
        map[goal._id] = { 
          ...state[goal._id],
          ...goal
        };
        return map;
      }, {});
    case GOAL_LOAD:
      return {
        ...state,
        [payload._id]: payload
      };
    case LOGOUT: 
      return {};
    default: 
      return state;
  }
}

export function goalList(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload.map(goal => goal._id);
    case LOGOUT:
      return [];
    default: 
      return state;
  }
}
