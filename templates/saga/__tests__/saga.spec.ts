import { call } from 'redux-saga/effects';
import { fetchData } from '../app/containers/Home/saga';
import { fetchDataSuccess, fetchDataFail } from '../app/containers/Home/actions';
import { FETCH_DATA } from '../app/containers/Home/constants';
import request from '../app/utils/request';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

describe('Redux sagas', () => {
  const payload = { payload: { query: 'asd' } };
  const someUrl = 'https://node-hnapi.herokuapp.com/news?0=a&1=s&2=d';
  it('should successfully fetch data', () => {
    const successData = {
      message: 'mock success message'
    };
    return expectSaga(fetchData, payload)
      .provide([[call(request, someUrl), successData]])
      .put(fetchDataSuccess(successData))
      .call(request, someUrl)
      .dispatch({
        type: FETCH_DATA,
        payload: payload
      })
      .run();
  });
  it('should throw an error when fail to fetch data', () => {
    const error = new Error('mock error message');
    return expectSaga(fetchData, payload)
      .provide([[call(request, someUrl), throwError(error)]])
      .put(fetchDataFail(error))
      .call(request, someUrl)
      .dispatch({
        type: FETCH_DATA,
        payload: payload
      })
      .run();
  });
});
