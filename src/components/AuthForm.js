import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' : 'signin';
        this.props.onAuth(authType, this.state)
            .then(() => {
                this.props.history.push("/");
            });
    }

    render(){
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText, signUp, errors, history, removeError } = this.props;

        history.listen(() => {
            removeError();
        })
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmit}>
                            <h4 className="text-center">{heading}</h4>
                            {errors.message && (
                                <div className="alert alert-danger">{errors.message}</div>
                            )}
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
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary float-left">{buttonText}</button>
                                <Link className="float-right" to={signUp ? "/signin" : "/signup"}>{signUp ? "I already have an account?" : "I dont't have an account?"}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>         
        );
    }
}