import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../images/warbler-logo.png';
import { logout } from '../store/actions/auth';

class Navbar extends Component{
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Warbler Home" title="Warbler Home" />
                    </Link>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav navbar-nav nav-right">
                            <li>
                                <NavLink to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</NavLink>
                            </li>
                            <li>
                                <a href="/#" onClick={this.logout}>Log out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav navbar-nav nav-right">
                            <li>
                                <NavLink to="/signup">Sign Up</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signin">Log in</NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, { logout })(Navbar);