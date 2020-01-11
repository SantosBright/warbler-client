import { LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes';
import { apiCall } from '../../services/api';
import { addError } from './errors';

export function loadMessages(messages){
    return {
        type: LOAD_MESSAGES,
        messages
    }
}

export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
});

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

export const removeMessage = (user_id, message_id) => dispatch => {
    return apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
            .then(() => dispatch(remove(message_id)))
            .catch(err => dispatch(addError(err.message)));
}