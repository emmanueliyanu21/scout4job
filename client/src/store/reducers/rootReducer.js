import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import vitaeReducer from "./vitaeReducer";
import coverReducer from "./coverReducer"

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    vitae: vitaeReducer,
    cover: coverReducer
});
