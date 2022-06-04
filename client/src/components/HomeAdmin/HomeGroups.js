import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPanels } from '../../actions/panels'
import Panels from '../Panels/Panels'
import FormPanels from '../Form/FormPanels'

import useStyles from './styles';

const HomeGroups = () => {
  const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
 
    
     
    const classes = useStyles();
    

    useEffect(() =>{
        dispatch(getPanels());
    }, [currentId, dispatch]);

  return (
    <Grow in>
          <Container maxWidth="xl">
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={7}>
                    <Panels setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                
                    <FormPanels currentId={currentId} setCurrentId={setCurrentId}/>
                    
                </Grid>
                
            </Grid>
          </Container>
        </Grow>
  );
}

export default HomeGroups