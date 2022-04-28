import React, {useState, useEffect} from 'react';
import {Container , AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Marking from './components/Marking/Marking';
import FormMarking from './components/Form/FormMarking';
import {useDispatch} from 'react-redux';

import { getMarking} from './actions/marking';
import prosupreme from './images/prosupreme.jpg';
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
            <AppBar className={classes.appBar} position= "static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">ProjectSupreme</Typography>
                <img className={classes.image} src = {prosupreme} alt="prosupreme" height="60"/>
            </AppBar>
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