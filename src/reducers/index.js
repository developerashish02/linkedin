import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articalReducer from "./articalReducers";
const rootReducer = combineReducers({
    userState: userReducer,
    articalState: articalReducer,
})

export default rootReducer; 
