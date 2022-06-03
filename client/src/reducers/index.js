import { combineReducers } from 'redux';

import marking from './marking';
import auth from './auth';
import subs from './subs';
import temps from './temps';

export const reducers = combineReducers({ marking, auth, subs , temps});