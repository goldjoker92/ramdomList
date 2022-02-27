import { combineReducers,createStore } from "redux";
import userreducer from './reducer/users';

const rootReducer=combineReducers({user:userreducer})

const store= createStore(rootReducer)

export default store;