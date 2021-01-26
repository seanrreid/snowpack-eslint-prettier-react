import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import './Button.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    as: 'primary' | 'secondary' | 'tertiary'
  }>

export const Button = ({ as = 'primary', children, className = '', ...props }) => {
  const classes = `button button-${as.toLowerCase()} ${className}`.trim()

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
