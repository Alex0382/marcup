import {compose, createStore} from "redux";
import {rootReducer} from "../reducers/root.reducer";


export const store = createStore(
    rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

