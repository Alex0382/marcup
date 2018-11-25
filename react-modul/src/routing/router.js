import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserData from '../components/user.data';
import ChangeSettings from '../components/change.settings';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {UserData}/>
            <Route exact path = '/change' component = {ChangeSettings}/>
        </Switch>
    </BrowserRouter>
);

export default Router;