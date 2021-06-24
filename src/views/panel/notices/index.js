import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import NewNotice from './new'
import ListNotice from './list'

export default function Notices() {
    const match = useRouteMatch()
    return (
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <Switch>
                        <Route path={`/avisos/novo`}>
                            <NewNotice />
                        </Route>
                        <Route path={`${match.path}`}>
                            <ListNotice />
                        </Route>
                </Switch>
            </div>
        </div>    
    );
}