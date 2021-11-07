import './styles/bootstrap.scss';
import './styles/global.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import React from 'react';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/shop/:categoryId'} component={ProductList} />
        <Route exact path={'/product/:productId'} component={ProductPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
