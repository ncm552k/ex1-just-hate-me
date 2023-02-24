import PropTypes from 'prop-types'
import React from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} type='button'>
      {text}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
