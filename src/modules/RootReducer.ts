import { combineReducers } from 'redux';
import auth from './Login/reducer';

const rootReducer = combineReducers({
  auth,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
