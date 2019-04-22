import { fetchData } from '../app/containers/Home';
import { FETCH_DATA } from '../app/containers/Home/constants';
import reducer from '../app/containers/Home/reducer';

describe('action creators', () => {
  it('should return the correct action', async () => {
    const query = 'test query';
    const expectedAction = {
      type: FETCH_DATA,
      payload: { query }
    };
    expect(fetchData(query)).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  describe('FETCH_DATA', () => {
    it('should return the correct state', async () => {
      const query = 'test query';
      const action = {
        type: FETCH_DATA,
        payload: { query }
      };

      expect(reducer([], action)).toEqual({
        fetching: true
      });
    });
  });
});
