import { LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';
import { apiCall } from '../../services/api';
import { addError } from './errors';

export function loadMessages(messages){
    return {
        type: LOAD_MESSAGES,
        messages
    }
}

export function getMessages(){
    return dispatch => {
        apiCall("get", "/api/messages").then(messages => {
            dispatch(loadMessages(messages));
        }).catch(err => dispatch(addError(err.message)));
    }
}

export const postNewMessage = text => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/api/users/${id}/messages`, {text})
            .then(res => {})
            .catch(err => dispatch(addError(err.message)));
}