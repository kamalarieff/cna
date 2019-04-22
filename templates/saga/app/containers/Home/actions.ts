import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';
import { action } from 'typesafe-actions';
import { HNQuery, HNResponse } from './types';

export function fetchData(query: HNQuery) {
  return action(FETCH_DATA, { query });
}

export function fetchDataSuccess(response: HNResponse) {
  return action(FETCH_DATA_SUCCESS, { response });
}

export function fetchDataFail(error: Error) {
  return action(FETCH_DATA_FAIL, { error });
}
