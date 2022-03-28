import produce from 'immer';

import { SET_IS_VISIBLE } from '../actions/toast';

const initialState = {
    isVisible: ''
};

export default produce((draft, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_IS_VISIBLE: {
            draft.isVisible = payload.isVisible;
            break;
        }
        default:
            break;
    }
}, initialState);
