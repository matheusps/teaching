import React, { Component } from 'react';
import CartItem from '../../components/CartItem';

import './style.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {  };
    }
    render() {
        return (
            <section>
                
                <h1>Your Cart</h1>

                <div className="cart-itens">
                    {
                        this.props.cart.itens.map( (item, i) => (
                            <CartItem key={i} {...item} onClick={ this.props.removeFromCart.bind(this, item)}/>
                        ))
                    }
                </div>
                
                <button className="checkout-btn btn btn-positive is-stuck-bottom-right has-three-quarter-width">
                    Checkout
                </button>
                
            </section>
        );
    }
}

export default CartPage;