import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, className, onClick}) => {
    return (
        <a href="#" onClick={(e) => onClick(e)} className={"p-1 rounded duration-300 "+className}>
            {text}
        </a>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onclick: PropTypes.func,
}

export default Button
