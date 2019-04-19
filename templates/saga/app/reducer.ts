import { combineReducers } from 'redux';
import { reducer as home } from '../app/containers/Home/reducer';

export default function createReducer() {
  return combineReducers({
    home,
  });
}
