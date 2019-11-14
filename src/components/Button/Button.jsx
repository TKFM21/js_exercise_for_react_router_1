import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    return (
        <div className="btn">
            { props.children }
        </div>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired
};

export default Button;