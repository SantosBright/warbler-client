import React, { component, Component } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../store/actions/messages';
import MessageItem from '../components/MessageItem.js';

class MessageList extends Component{
    componentDidMount(){
        this.props.getMessages();
    }

    render(){
        const { messages } = this.props;
        let messageList = messages.map(m => (
            <MessageItem
                key={m.id}
                date={m.createAt}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl}
            />
        ));

        return (
            <div className="message-list">
                {messageList}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, { getMessages })(MessageList);