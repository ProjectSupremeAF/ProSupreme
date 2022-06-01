import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'


import { getSubs } from '../../actions/subs';
import Subs from '../Subs/Subs';
import FormSubs from '../Form/FormSubs';

import useStyles from './styles';

const HomeSubs = () => {
  const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
 
    
     
    const classes = useStyles();
    

    useEffect(() =>{
        dispatch(getSubs());
    }, [currentId, dispatch]);

  return (
    <Grow in>
            <Container maxWidth="xl">
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={7}>
                    <Subs setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                
                    <FormSubs currentId={currentId} setCurrentId={setCurrentId}/>
                    
                </Grid>
                
            </Grid>
            </Container>
        </Grow>
  );
}

export default HomeSubs