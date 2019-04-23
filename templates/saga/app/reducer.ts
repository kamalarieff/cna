import { combineReducers } from 'redux';
import { reducer as home, IState as HomeState } from './containers/Home';

export interface IAppState {
  home: HomeState;
}

export default function createReducer() {
  return combineReducers({
    home
  });
}
