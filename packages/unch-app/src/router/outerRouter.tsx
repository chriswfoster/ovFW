import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../ui/main';

export default (
    <Switch>
        <Route path="authd" component={Main} />
    </Switch>
)