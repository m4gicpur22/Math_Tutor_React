import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Button
} from 'reactstrap';


class Carousel extends Component {

    render() {
        return (
            <div>
                <h1>Carousel Here!</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Carousel);