import produce from 'immer';

import { SET_IS_VISIBLE, SET_MESSAGE } from '../actions/toast';

const initialState = {
    isVisible: false,
    message: ''
};

export default produce((draft, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_IS_VISIBLE: {
            draft.isVisible = payload.isVisible;
            break;
        }

        case SET_MESSAGE: {
            draft.message = payload.message;
            break;
        }

        default:
            break;
    }
}, initialState);
