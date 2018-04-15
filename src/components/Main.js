import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import {ProductPage} from "./Products/ProductPage";
import {ProductArchive} from "./Pages/ProductArchive";

const Main = () => (
    <main>
        <Switch onUpdate={() => window.scrollTo(0, 0)}>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/about' component={About}/>
            <Route
                path="/products"
                render={({ match: { url } }) => (
                    <Switch>
                        <Route exact path={`${url}/`} component={ProductArchive} />
                        <Route path={`${url}/`} component={ProductPage} />
                        />
                    </Switch>
                )}
            />
            <Route component={Homepage}/>
        </Switch>
    </main>
);

export default Main