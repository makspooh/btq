export const SET_IS_MODAL_VISIBLE = 'SET_IS_MODAL_VISIBLE';
export const SET_VIEWS = 'SET_VIEWS';

export function setIsModalVisible(isVisible) {
    return {
        type: SET_IS_MODAL_VISIBLE,
        payload: { isVisible }
    };
}

export function setModalViews(views) {
    return {
        type: SET_VIEWS,
        payload: { views }
    };
}

export const a = 0;
