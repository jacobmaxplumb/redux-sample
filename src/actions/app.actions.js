export const ENTER_EDIT_MODE = 'Enter Edit Mode';
export const UPDATE_TITLE_TEXT = 'Update Title Text';
export const SET_TITLE = 'Set Title';

export const enterEditMode = () => {
    return {type: ENTER_EDIT_MODE}
}

export const updateTitleText = (text) => {
    return {type: UPDATE_TITLE_TEXT, text}
}

export const setTitle = () => {
    return {type: SET_TITLE}
}