import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './pages/App';
import ContentPage from './pages/ContentPage';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/content/:grade" component={ContentPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
