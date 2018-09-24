import React from 'react';
import { withRouter } from 'react-router-dom';
import basketIcon from '../../assets/basket-icon.png';

const CartPreviewButton = ( {history, itens} ) => {

    const redirectToCart = e => {
        e.preventDefault();
        history.push('/cart');
    }

    return(
        <div className="cart-btn btn btn-primary is-stuck-bottom-left has-quarter-width" onClick={redirectToCart}>
            <img src={ basketIcon } alt="Cart Icon" width="40" height="36"></img>
            <span>{
                itens.reduce( (acc, item ) => {
                    return acc + item.price;
                }, 0 ) 
                }$
            </span>
        </div>
    )
};

export default withRouter( CartPreviewButton );