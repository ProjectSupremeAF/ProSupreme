import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getMarking } from '../../actions/marking'
import Marking from '../Marking/Marking'
import FormMarking from '../Form/FormMarking'


const HomeAdmin = () => {
    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getMarking());
    }, [currentId, dispatch]);

    return(
        <Grow in>
            <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Marking setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormMarking currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
            </Container>
        </Grow>

    );
    
};

export default HomeAdmin