import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getTemps } from '../../actions/temps.js'
import Temps from '../Temps/Temps.js';
import FormTemps from '../Form/FormTemps';

import useStyles from './styles';

const HomeTemps = () => {

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
     
  const classes = useStyles();
    

  useEffect(() =>{
        dispatch(getTemps());
  }, [currentId, dispatch]);

  return (
    
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={7}>
                <Temps setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormTemps currentId={currentId} setCurrentId={setCurrentId}/> 
            </Grid>
            
        </Grid>
      </Container>
    </Grow>
  );
}

export default HomeTemps