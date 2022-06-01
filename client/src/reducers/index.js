import { combineReducers } from 'redux';

import marking from './marking';
import auth from './auth';
import subs from './subs';

export const reducers = combineReducers({ marking, auth, subs });