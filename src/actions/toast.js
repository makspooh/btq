export const SET_IS_VISIBLE = 'SET_IS_VISIBLE';

export function setIsVisible(isVisible) {
    return {
        type: SET_IS_VISIBLE,
        payload: { isVisible }
    };
}
