import { all } from 'redux-saga/effects';
import { root as Home } from './containers/Home/saga';

export default function* AppSaga() {
  yield all([Home()]);
}
