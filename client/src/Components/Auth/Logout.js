import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { logout } from '../../Actions/AuthAction';
import { 
    Button,
    NavLink
 } from "reactstrap";

class Logout extends Component {
//no State set yet for logout, just logs out a user
    static propTypes = {
        logout: Proptypes.func.isRequired
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Button>
                        <NavLink onClick={this.props.logout} href="#">
                            Logout
                        </NavLink>
                    </Button>
                </Fragment>

            </div>
        )
    }
}

export default connect(null, { logout })(Logout);