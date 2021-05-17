import React from 'react'
import PropTypes from 'prop-types'

const Button = (prop) => {
    return (
        <button 
            className="btn"
            onClick = {prop.onClick}
        >
            {prop.text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
