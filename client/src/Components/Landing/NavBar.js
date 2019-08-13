import React, { Component, Fragment } from 'react';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Logout from '../Auth/Logout';
import PropTypes from 'prop-types';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';

//research on Fragment component
class NavBar extends Component {

    state = {
        isOpen: false
    }

    // static PropTypes = {
    //     auth.
    // }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    render() {

        const { isAuthenticated, user } = this.props.auth;






        return (
            <div>
                <h1>Hello!</h1>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(NavBar);
