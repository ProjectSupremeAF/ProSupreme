import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Panel from './Panel/Panel';

import useStyles from './styles';

const Panels = ({setCurrentId}) => {

    const panels = useSelector((state) => state.panels);
    const classes = useStyles();

    console.log(panels);
  return (
    !panels.length ? <CircularProgress/> :(
        <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
            {panels.map((panel)=>(
                <Grid key={panel._id} item xs={12} sm={6}>
                    <Panel panel ={panel} setCurrentId={setCurrentId}/>

                </Grid>
            ))}

        </Grid>
    )
  );
}

export default Panels