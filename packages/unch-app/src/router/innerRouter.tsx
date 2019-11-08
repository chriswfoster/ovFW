import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Campaigns from '../components/Campaigns';
import Audience from '../components/Audience';
import Reports from "../components/Reports"
import Main from '../ui/main';
import Home from '../components/Home';

export default (
    <Switch>
        <Route
            path="/campaigns"
            component={Campaigns}
        // render={() => <Campaigns />}
        />
        <Route
            path="/audiences"
            component={Audience}
        // render={() => <Audience />}
        />
        <Route
            path="/reports"
            component={Reports}
        />
        <Route
            path="/"
            component={Home}
        />
    </Switch>
)