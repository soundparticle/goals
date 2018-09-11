jest.mock('../../services/api', () => ({
  postGoal: jest.fn(),
  getGoals: jest.fn()
}));

import { addGoal } from './actions';
import { GOALS_ADD } from './reducers';
import { getGoals, postGoal } from '../../services/api';
  
describe.skip('Goals Tests', () => {

  it('adds a goal', () => {
    const promise = Promise.resolve();
    postGoal.mockReturnValueOnce(promise);
    
    const { type, payload } = addGoal();
    expect(type).toBe(GOALS_ADD);
    expect(getGoals.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });
});
