import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Campaigns from '../components/Campaigns';
import Audience from '../components/Audience';
import Reports from "../components/Reports"
import Main from '../ui/main';
import Home from '../components/Home';
import Login from "../components/Login/index"
import NewCampaign from '../components/Campaigns/NewCampaign/NewCampaign';

export default (
    <Switch>
        {/* <Route
            path="/login"
            component={Login}
        /> */}
        <Route
            path="/main/home"
            component={Home}
        />
        {/* <Route
            path="/main/home"
            component={Campaigns}
        // render={() => <Campaigns />}
        /> */}
        {/* <Route
            path="/home/audiences"
            component={Audience}
        // render={() => <Audience />}
        /> */}
        <Route
            path="/main/reports"
            component={Reports}
        />
        {/* <Route
            path="/home/newCampaign"
            component={NewCampaign}
        /> */}
    </Switch>
)