import React, { Component, Fragment } from 'react';
//use reactstrap library here
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

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {

        //authentication functions, when user is logged in
        const authlinks = (
            <Fragment>
                <NavItem>
                    <span classname="navabr-text mr-3">
                        <strong>{ user ? `Welcome! ${user.name}`: 'NULL' }</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        )

        //authentication function, user not authenticated
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <Register/>
                </NavItem>
                <NavItem>
                    <Login/>
                </NavItem>
            </Fragment>
        )

        const { user, authenticated } = this.props.auth;

        return (
            <div>
                <NavBar color="dark" expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="#">Math Tutor App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authlinks: guestlinks }
                            </Nav>
                        </Collapse>
                    </Container>
             </NavBar>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(NavBar);
