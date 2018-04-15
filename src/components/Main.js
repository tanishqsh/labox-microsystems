import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import {ProductPage} from "./Products/ProductPage";
import {ProductArchive} from "./Pages/ProductArchive";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/products' component={ProductArchive}/>
            <Route component={Homepage}/>
        </Switch>
    </main>
);

export default Main