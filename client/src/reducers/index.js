import { combineReducers } from 'redux';

import marking from './marking';
import auth from './auth';

export const reducers = combineReducers({ marking, auth });