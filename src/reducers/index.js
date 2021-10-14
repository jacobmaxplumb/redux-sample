import { createStore } from "redux"

const initialState = {
    title: 'My App'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export const store = createStore(reducer);