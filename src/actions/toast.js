export const SET_IS_VISIBLE = 'SET_IS_VISIBLE';
export const SET_MESSAGE = 'SET_MESSAGE';

export function setIsVisible(isVisible) {
    return {
        type: SET_IS_VISIBLE,
        payload: { isVisible }
    };
}

export function updateMessage(message) {
    return {
        type: SET_MESSAGE,
        payload: { message }
    };
}
