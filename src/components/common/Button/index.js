import React from 'react';
import classes from './Button.module.scss'

export const Button = ({ title }) => {
  return (
	 <button className={classes.btn}>{title}</button>
  )
}
