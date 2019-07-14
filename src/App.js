import React, {Component} from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import {Route} from 'react-router-dom';
import Orders from './Containers/Orders/Orders';

class App extends Component {
  render() {
    return (

        <Layout>
          <Route path="/checkout"  component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Layout>
    );
}
}

export default App;
