import { combineReducers } from "redux";
import performanceReducer from './performance.slice';
import serverReducer from './server.slice';
import authReducer from './auth.slice';


export default combineReducers({
  performance: performanceReducer,
  servers: serverReducer,
  auth: authReducer,
});