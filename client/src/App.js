import React from 'react';
import {Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomeAdmin from './components/HomeAdmin/HomeAdmin';
import Auth from './components/Auth/Auth';


const App = () => (
    <BrowserRouter>
        <Container maxidth = "lg">
        <NavBar/>
        <Switch>
            <Route path="/" exact component={HomeAdmin} />
            <Route path="/auth" exact component={Auth} />
        </Switch>    
        </Container>
    </BrowserRouter>
        
);

export default App;