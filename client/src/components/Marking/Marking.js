import React from "react";
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Marks from './Marks/Marks'

import useStyles from './styles';

const Marking = () =>{
    const marking = useSelector((state) => state.marking);
    const classes = useStyles();

    console.log(marking);
    
    return(
        !marking.length ? <CircularProgress/> :(
            <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
                {marking.map((marks)=>(
                    <Grid key={marks._id} item xs={12} sm={6}>
                        <Marks marks ={marks}/>

                    </Grid>
                ))}

            </Grid>
        )
        
    );
}

export default Marking;