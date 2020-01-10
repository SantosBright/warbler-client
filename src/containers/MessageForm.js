import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    handleNewMessage = e => {
        e.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({ message: '' });
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.handleNewMessage} className="container-fluid form-group col-md-5 col-sm-6">
                 {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors}</div>
                 )}
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={this.state.message}
                        rows="4"
                        onChange={e => this.setState({message: e.target.value})}
                    ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success float-right">Add my message!</button>
                </div>    
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);