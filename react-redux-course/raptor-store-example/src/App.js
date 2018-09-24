import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './config/history';
import Menu from './components/Menu';
import AboutPage from './pages/About';
import CartPage from './pages/Cart';
import DinosPage from './pages/Dinos';

import './styleguide.css';
import './ninjaHelpers.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: {
        itens: []
      }
    }
  }

  addToCart (dino) {
    this.setState({
      cart: {
        itens: [...this.state.cart.itens, dino]
      }
    });
  }

  removeFromCart (dino) {
    this.setState({
      cart: {
        itens: this.state.cart.itens.filter( el => el !== dino)
      }
    });
  }

  render() {
    return (
      <Router history={ history }>
        <main className="App">
          <Menu itens={ this.state.cart.itens } />
          <section className="content">
                <Switch>
                  
                  <Redirect exact from="/" to="/dinos" />
                  <Route exact path="/about" component={ AboutPage } />

                  <Route exact path="/cart"
                    render={ props => <CartPage {...props} cart={this.state.cart} removeFromCart={this.removeFromCart} />}
                  />

                  <Route exact path="/dinos"
                    render={ props => <DinosPage {...props} addToCart={this.addToCart} /> }
                  />

                </Switch>
          </section>
        </main>
      </Router>
    );
  }
}

export default App;
