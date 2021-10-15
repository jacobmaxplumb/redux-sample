export const UPDATE_NAME = 'Update Name';
export const UPDATE_PHONE = 'Update Phone';
export const ADD_CONTACT = 'Add Contact';

export const updateName = name => {
    return {type: UPDATE_NAME, name}
}

export const updatePhone = phone => {
    return {type: UPDATE_PHONE, phone}
}

export const addContact = () => {
    return {type: ADD_CONTACT}
}

