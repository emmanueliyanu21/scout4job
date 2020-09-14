import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import vitaeReducer from "./vitaeReducer";
import coverReducer from "./coverReducer";
import employerauthReducer from './employerauthReducer'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    vitae: vitaeReducer,
    cover: coverReducer,
    employerauthReducer
});
