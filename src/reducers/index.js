import { combineReducers } from 'redux';

import toast from './toast';
import modal from './modal';


export default combineReducers({
    toast,
    modal
});
