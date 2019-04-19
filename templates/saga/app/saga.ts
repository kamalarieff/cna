import { all } from 'redux-saga/effects';
import { saga as Home } from './containers/Home';

export default function* AppSaga() {
  yield all([Home()]);
}
