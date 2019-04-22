import { combineReducers } from 'redux';
import { reducer as home } from './containers/Home';

export default function createReducer() {
  return combineReducers({
    home,
  });
}
