import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Customer from './Customer/Customer';

import useStyles from './styles';

const Customers = ({setCurrentId}) => {

    const customers = useSelector((state) => state.customers);
    const classes = useStyles();

    console.log(customers);
  return (
    !customers.length ? <CircularProgress/> :(
        <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
            {customers.map((customer)=>(
                <Grid key={customer._id} item xs={12} sm={6}>
                    <Customer customer={customer} setCurrentId={setCurrentId}/>

                </Grid>
            ))}

        </Grid>
    )
  );
}

export default Customers