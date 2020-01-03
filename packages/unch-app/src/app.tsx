import React from 'react';
import { Layout } from 'antd';
import {
    Card,
    Cards,
} from 'one-ui-layout';
import { useDispatch } from 'react-redux';
import { useCtx } from 'one-ui-provider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './ui/main';
import innerRouter from './router/innerRouter';
import Campaigns from './components/Campaigns';
import outerRouter from './router/outerRouter';
import Login from './components/Login';


interface Props {
}

export const App = (props: Props) => {
    // const dispatch = useDispatch();
    // const { resolver } = useCtx();
    return (
        <Router>
            {/* {innerRouter} */}
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/main" component={Main} />
            </Switch>
            {/* <Campaigns /> */}
        </Router>
    )
}