import React from 'react';

const Card = ( { image, price, onClick } ) => (
    <div className="card" onClick={onClick}>
        <img width="300" height="300" alt="Dinossaur" src={image}></img>
        <button className="btn btn-primary has-full-width">{price}$</button>
    </div>
);

export default Card;