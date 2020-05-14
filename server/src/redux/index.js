import { combineReducers } from "redux";
import global from "./reducers/global_state";
import userlist from './reducers/user_list';

export default combineReducers({
    global,
    userlist
});