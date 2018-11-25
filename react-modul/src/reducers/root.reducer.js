import {combineReducers} from "redux";
import UserReducer from './change.reducer';
import ModalReducer from './modal.reducer';


export const rootReducer = combineReducers({
    userReducer:UserReducer,
    modalReducer:ModalReducer,
});