import React from 'react';
import {Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomeAdmin from './components/HomeAdmin/HomeAdmin';
import Auth from './components/Auth/Auth';
import Landing from './components/Landing/Landing';
import HomeSubs from './components/HomeAdmin/HomeSubs';
import HomeTemps from './components/HomeAdmin/HomeTemps';
import HomeGroups from './components/HomeAdmin/HomeGroups';


const App = () => (
    <BrowserRouter>
        <Container maxidth = "lg">
        <NavBar/>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" exact component={HomeAdmin} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/homesubs" exact component={HomeSubs} />
            <Route path="/hometemps" exact component={HomeTemps} />
            <Route path = "/groups" exact component={HomeGroups} />
        </Switch>    
        </Container>
    </BrowserRouter>
        
);

export default App;