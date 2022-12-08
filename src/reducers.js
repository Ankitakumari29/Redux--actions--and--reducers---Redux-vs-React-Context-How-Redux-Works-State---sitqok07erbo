import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "./actions";

const initalState = {
    loggedIn : false,
    username : ''
};

const authReducer = (state=initalState,action) => {
  switch(action.type){
    case LOGIN : return {
      loggedIn : true,
      username : action.payload,
    }
    case LOGOUT : return {
      loggedIn : false,
      username : '',
    }
    default: return state
  }
}
const reducers = combineReducers({
  auth : authReducer
})
export default reducers
