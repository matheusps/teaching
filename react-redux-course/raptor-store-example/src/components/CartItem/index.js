import React from 'react';
import trashIcon from '../../assets/trash-icon.png';

const CartItem = ( { image, name, price, onClick } ) => (
    <div className="cart-item row">
        
        <div className="col-2 dino-img">
            <img src={ image.url } alt="Dino on cart" width="100" height="100" />
        </div>
        
        <span className="info col-2">
            <h2 className="title">{ name }</h2>
            <h3 className="subtitle">{ price }</h3>
        </span>

        <div className="col-offset-6"></div>
        
        <div className="aside col-2" onClick={onClick}>    
            <img src={ trashIcon } alt="Trash icon" width="30" height="30" />
        </div>
    </div>
);

export default CartItem;