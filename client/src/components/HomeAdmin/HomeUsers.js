import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getCustomers } from '../../actions/customers'
import Customers from '../Customers/Customers'
import FormCus from '../Form/FormCus'

import useStyles from './styles';

const HomeUsers = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
 
    
     
    const classes = useStyles();
    

    useEffect(() =>{
        dispatch(getCustomers());
    }, [currentId, dispatch]);

  return (
    <Grow in>
            <Container maxWidth="xl">
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={7}>
                    <Customers setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                
                    <FormCus currentId={currentId} setCurrentId={setCurrentId}/>
                    
                </Grid>
                
            </Grid>
            </Container>
    </Grow>
  );
}

export default HomeUsers