import reducer from './filter.reducer.js';

describe('filter (reducer)', ()=> {
  test('initial state', ()=> {
    expect(reducer(undefined, {})).toEqual({ hideComplete: false });
  });
  test('SET_FILTER', ()=> {
    const filter = { hideComplete : true };
    const action = {
      filter,
      type: 'SET_FILTER'
    };
    expect(reducer({}, action)).toEqual(filter);
  });
});
