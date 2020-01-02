import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

export default (state = [], action) => {
    switch(action.type){
        case LOAD_MESSAGES:
            return [...action.message];
        default:
            return state;
    }
}