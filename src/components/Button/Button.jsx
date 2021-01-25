import React from 'react'

import './Button.css'

export const Button = ({ as = 'primary', children, className = '', ...props }) => {
  const classes = `button button-${as.toLowerCase()} ${className}`.trim()
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

