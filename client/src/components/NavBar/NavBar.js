import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import prosupreme from '../../images/prosupreme.jpg';

const NavBar = () => {

    const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position= "static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">ProjectSupreme</Typography>
                <img className={classes.image} src = {prosupreme} alt="prosupreme" height="85"/>
    </AppBar>
  )
}

export default NavBar