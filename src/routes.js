import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Main from './components/Main'
import Images from './views/Images'
import Notices from './views/panel/notices'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/images" component={Images} />

            <Route name="panel.notices" path="/painel/avisos" component={Notices} />
        </Switch>
    </BrowserRouter>
)

export default Routes