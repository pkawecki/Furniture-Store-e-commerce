import './styles/bootstrap.scss';
import './styles/global.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import MainLayout from './components/layout/MainLayout/MainLayoutContainer';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Blog from './components/views/Blog/Blog';
import Cart from './components/layout/Cart/Cart';
import Search from './components/views/Search/Search';
import { Provider } from 'react-redux';
import React from 'react';
import Register from './components/views/Register/Register';
import store from './redux/store';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/shop/:categoryId'} component={ProductList} />
        <Route exact path={'/product/:productId'} component={ProductPage} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/blog'} component={Blog} />
        <Route exact path={'/cart'} component={Cart} />
        <Route exact path={'/search'} component={Search} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
