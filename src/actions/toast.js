export const SET_IS_TOAST_VISIBLE = 'SET_IS_TOAST_VISIBLE';
export const SET_MESSAGE = 'SET_MESSAGE';

export function setIsToastVisible(isVisible) {
    return {
        type: SET_IS_TOAST_VISIBLE,
        payload: { isVisible }
    };
}

export function updateToastMessage(message) {
    return {
        type: SET_MESSAGE,
        payload: { message }
    };
}
