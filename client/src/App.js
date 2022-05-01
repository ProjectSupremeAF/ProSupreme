import React, {useState, useEffect} from 'react';
import {Container ,  Grow, Grid} from '@material-ui/core';
import Marking from './components/Marking/Marking';
import FormMarking from './components/Form/FormMarking';
import NavBar from './components/NavBar/NavBar';
import {useDispatch} from 'react-redux';

import { getMarking} from './actions/marking';

import useStyles from './styles';


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getMarking());
    }, [currentId, dispatch]);
    
    return(
        <Container maxidth = "lg">
            <NavBar/>
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
        </Container>
    );
}

export default App;