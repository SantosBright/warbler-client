import React, { Component } from 'react';

export default class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp } = this.props;
        return (
            <div>
                <div className="row justify-content-center text-center">
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    value={password}
                                />
                            </div>
                            {signUp && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            onChange={this.handleChange}
                                            value={username}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="profileImageUrl">ProfileImageUrl:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="profileImageUrl"
                                            name="profileImageUrl"
                                            onChange={this.handleChange}
                                            value={profileImageUrl}
                                        />
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>         
        );
    }
}