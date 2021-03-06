import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import PropTypes from 'prop-types';
import { login } from '../../Actions/AuthAction';
import { clearErrors } from '../../Actions/ErrorAction';
import { connect } from 'react-redux';

class Login extends Component {

        state = {
            modal: false,
            username: '',
            password: '',
            msg: null
        };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    ///uodate if any changes are made when logging in
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;

        if(error !== prevProps.error){
            if(error.id == 'LOGIN_FAIL')
                this.setState({ msg: error.msg.msg })
            else
                this.setState({ msg: null })
        }

        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }

    };

    //toggle functionality for login button
    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;

        const newuser = {
            username,
            password
        };
        //redux actions for login
        this.props.login(newuser);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render () {

        return (
            <div>
                <NavLink onClick={this.toggle} href='#'>
                    Login
                </NavLink>

                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.onSubmit}>
                <FormGroup>
                <Label for="username">username</Label>
                <Input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className = "mb-3"
                    onChange={this.onChange}
                />

                <Label for="password">password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className='mb-3'
                    onChange={this.onChange}
                />
                <Button
                color="dark"
                style = {{marginTop: '2rem'}}
                block
                >
                    Login
                </Button>
                </FormGroup>
                </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }

}

const mapStateToProps = ( state ) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, {login, clearErrors} )(Login);