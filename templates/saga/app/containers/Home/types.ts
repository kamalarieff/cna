import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type HomeActions = ActionType<typeof actions>;

export interface HNQuery {
  page: number;
}

interface HNData {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface HNResponse {
  response: HNData[];
}

export interface IState {
  readonly fetching: Boolean;
  readonly data: [];
}
