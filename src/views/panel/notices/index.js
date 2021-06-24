import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import NewNotice from './new'
import ListNotice from './list'

export default function Notices() {
    const match = useRouteMatch()
    return (<>
        <div>Contexto de avisos</div>
        <Switch>
            <Route path={`${match.path}/novo`}>
                <NewNotice />
            </Route>
            <Route path={`${match.path}`}>
                <ListNotice />
            </Route>
        </Switch>
     </>)
}