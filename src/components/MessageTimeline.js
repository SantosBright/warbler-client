import React from 'react';
import MessageList from '../containers/MessagesList';
import UserAside from './UserAside';

const MessageTimeline = props => (
    <div className="row">
        <UserAside profileImgUrl={props.profileImgUrl} username={props.username} />
        <MessageList />
    </div>
);

export default MessageTimeline;
