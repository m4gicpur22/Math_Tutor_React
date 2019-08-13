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
import { register } from '../../Actions/AuthAction';
import { clearErrors } from '../../Actions/ErrorAction';
import { connect } from 'react-redux';

class Register extends Component {

        state = {
            modal: false,
            name: '',
            username: '',
            email: '',
            password: '',
            msg: null
        };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    ///uodate if any changes are made when logging in
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;

        if(error !== prevProps.error){
            if(error.id === 'REGISTER_FAIL')
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
        //clears errors on update/toggle
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, email, username, password } = this.state;

        const newuser = {
            name,
            email,
            username,
            password
        };
        //redux actions for login
        this.props.register(newuser);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render () {

        return (
            <div>
                
                <NavLink onClick={this.toggle} href='#'>
                    Register
                </NavLink>

                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle} >Register</ModalHeader>
                <ModalBody>
                    { this.state.msg ? (<Alert color = 'danger'>{this.state.msg}</Alert>): null}
                <Form onSubmit={this.onSubmit}>
                <FormGroup>
                <Label for="name">name</Label>
                <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className = "mb-3"
                    onChange={this.onChange}
                />
                <Label for="email">email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className = "mb-3"
                    onChange={this.onChange}
                />
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
                size="sm"
                style = {{marginTop: '2rem'}}
                block
                >
                Register
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
})

export default connect(mapStateToProps, {register, clearErrors} ) (Register);