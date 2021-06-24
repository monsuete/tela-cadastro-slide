import React from "react";
import PanelLayout from "../../layouts/painel";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Notices from "./notices";
import Posts from "./posts";

export default function PanelView() {
    const { path } = useRouteMatch();

    return (
        <PanelLayout>
            <Switch>
                <Route exact path={path}>
                    Bem vindo ao painel de administração do La Salle!
                </Route>
                <Route path={`${path}postagens`}>
                    <Posts />
                </Route>
                <Route path={`${path}avisos`}>
                    <Notices />
                </Route>
            </Switch>
        </PanelLayout>
    );
}
