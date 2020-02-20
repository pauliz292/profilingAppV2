import { createStore } from "redux";
import { profilesReducer } from "./reducer";

const store = createStore(
    profilesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);

export default store;