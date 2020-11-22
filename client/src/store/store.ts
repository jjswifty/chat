import { createStore, combineReducers } from "redux";
import { chatReducer } from './reducers/chat-reducer'

const reducers = combineReducers({
    chatReducer
})

export const store = createStore(reducers);

(window as any).store = store;