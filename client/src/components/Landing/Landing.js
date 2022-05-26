import React from 'react'
import { Container, Paper } from '@material-ui/core'
import useStyles from './styles';

const Landing = () => {
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <h1>Sign in for Admin</h1>
        </Paper>

    </Container>
  )
}

export default Landing