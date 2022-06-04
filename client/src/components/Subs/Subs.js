import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Sub from './Sub/Sub';

import useStyles from './styles';

const Subs = ({setCurrentId}) => {

    const subs = useSelector((state) => state.subs);
    const classes = useStyles();

    console.log(subs);

  return (
    !subs.length ? <CircularProgress/> :(
        <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
            {subs.map((sub)=>(
                <Grid key={sub._id} item xs={12} sm={6}>
                    <Sub sub ={sub} setCurrentId={setCurrentId}/>

                </Grid>
            ))}

        </Grid>
    )
  )
}

export default Subs