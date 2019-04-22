import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';
import { HomeActions, IState } from './types';

const initState: IState = {
  fetching: false,
  data: []
};

export default function reducer(state: IState = initState, action: HomeActions) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        fetching: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      const {
        payload: { response }
      } = action;
      return {
        ...state,
        fetching: false,
        data: response
      };
    }
    case FETCH_DATA_FAIL: {
      return {
        ...state,
        fetching: false
      };
    }
    default:
      return state;
  }
}
