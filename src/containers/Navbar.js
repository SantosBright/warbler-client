import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="" alt="Warbler Home" title="Warbler Home" />
                    </Link>
                </div>
                <ul className="nav navbar-nav nav-right">
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin">Log in</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, null)(Navbar);