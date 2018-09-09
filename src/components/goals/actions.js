import { GOALS_LOAD, GOAL_LOAD } from './reducers';
import { getAllGoals, getGoals } from '../../services/api';
import { getGoalList, getGoalById } from './reducers';

export const loadGoals = () => (dispatch, getState) => {
  const goalList = getGoalList(getState());
  if(goalList.length) return;

  dispatch({
    type: GOALS_LOAD,
    payload: getAllGoals()
  });
};


export const loadGoal = id => (dispatch, getState) => { 
  const goal = getGoalById(getState(), id);
  if(goal && goal.favoriteToys) return;
  
  dispatch({
    type: GOAL_LOAD,
    payload: getGoals(id)
  });
};

export const clearGoal = () => ({
  type: GOAL_LOAD,
  payload: null
});

