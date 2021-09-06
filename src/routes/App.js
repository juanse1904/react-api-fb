import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import Posts from '../containers/Posts';
import Write from '../containers/Write';


const App =()=>(
    <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/posts/:idpage' component={Posts} />
        <Route exact path='/write/:idpage' component={Write} />
    </BrowserRouter>

);

export default App;
