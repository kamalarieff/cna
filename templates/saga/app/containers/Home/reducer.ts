import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';

type State = {
  fetching: Boolean;
  data: [];
};

const initState: State = {
  fetching: false,
  data: [],
};

type actionType = {
  type: string;
}

type actionPayload = {
  payload: { response };
}

type action = actionType & actionPayload;

export default function home(state = initState, action: action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        fetching: true,
      };
    }
    case FETCH_DATA_SUCCESS: {
      const {
        payload: { response },
      } = action;
      return {
        ...state,
        fetching: false,
        data: response,
      };
    }
    case FETCH_DATA_FAIL: {
      return {
        ...state,
        fetching: false,
      };
    }
    default:
      return state;
  }
}
