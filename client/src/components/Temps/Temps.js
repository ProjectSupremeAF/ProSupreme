import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Temp from './Templ/Temp';

import useStyles from './styles';

const Temps = ({setCurrentId}) => {

    const temps = useSelector((state) => state.temps);
    const classes = useStyles();

    console.log(temps);

  return (
    !temps.length ? <CircularProgress/> :(
        <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
            {temps.map((temp)=>(
                <Grid key={temp._id} item xs={12} sm={6}>
                    <Temp temp ={temp} setCurrentId={setCurrentId}/>

                </Grid>
            ))}

        </Grid>
    )
  );
}

export default Temps