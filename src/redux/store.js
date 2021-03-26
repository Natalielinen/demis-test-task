import { combineReducers, createStore } from "redux";
import {reducer as formReducer} from 'redux-form';
import { formDataTableReducer } from './formDataTableReducer';
import { newsPageReducer } from './newsPageReducer';


let reducers = combineReducers({
    form: formReducer,
    tablePage: formDataTableReducer,
    newsPage: newsPageReducer

});

let store = createStore(reducers);



export default store;