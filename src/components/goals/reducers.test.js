import { goals, GOALS_ADD } from './reducers';

describe.only('Goals Reducer', () => {

  it('returns an empty array', () => {
    const state = goals(undefined, {});
    expect(state).toEqual([]);
  });

  it('saves a goal', () => {
    const data = { goal: 'running', completed: false, author: 'me' };
    const state = goals([], {
      type: GOALS_ADD, payload: data
    });
    expect(state).toEqual([data]);
  });
});