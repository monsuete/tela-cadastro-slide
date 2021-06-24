import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Panel from "./views/panel";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Panel />
            </Route>
        </Switch>
    </BrowserRouter>
);;

export default Routes