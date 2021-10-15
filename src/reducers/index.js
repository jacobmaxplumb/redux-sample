import { createStore } from "redux"
import { ENTER_EDIT_MODE, SET_TITLE, UPDATE_TITLE_TEXT } from "../actions/app.actions";

const initialState = {
    title: 'My App',
    editing: false,
    titleText: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ENTER_EDIT_MODE:
            return {...state, editing: true}
        case UPDATE_TITLE_TEXT:
            return {...state, titleText: action.text}
        case SET_TITLE:
            return {...state, title: state.titleText, editing: false, titleText: ''}
        default:
            return state
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());