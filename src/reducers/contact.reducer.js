import { ADD_CONTACT, UPDATE_NAME, UPDATE_PHONE } from "../actions/contact.actions";

const initialState = {
    contacts: [{name: 'Jacob', phone: '123-123-1234'}],
    contact: {
        name: '',
        phone: ''
    }
}

export const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NAME:
            return {
                ...state, 
                contact: {
                    ...state.contact, 
                    name: action.name
                }
            }
        case UPDATE_PHONE:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    phone: action.phone
                }
            }
        case ADD_CONTACT:
            const newContact = {name: state.contact.name, phone: state.contact.phone}
            return {...state, contacts: [...state.contacts, newContact], contact: {name: '', phone: ''}}
        default:
            return state;
    }
}