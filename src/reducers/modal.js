import produce from 'immer';

import { SET_IS_MODAL_VISIBLE, SET_VIEWS } from '../actions/modal';

const initialState = {
    isVisible: false,
    views: []
};

export default produce((draft, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_IS_MODAL_VISIBLE: {
            draft.isVisible = payload.isVisible;
            break;
        }

        case SET_VIEWS: {
            draft.views = payload.views;
            break;
        }

        default:
            break;
    }
}, initialState);
