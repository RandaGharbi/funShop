import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Home from '../Home/home';
import FormRegister from '../Register/RegisterForm';
import Categories from '../data/Categories';
import Profile from '../Profile/UserProfile';
const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/FormRegister" component={FormRegister} />
      <Route path="/Categories" component={Categories} />
      <Route path="/Profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
