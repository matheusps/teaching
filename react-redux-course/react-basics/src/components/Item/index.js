import React from 'react';
import './style.css';

const Item = ({item, onClick}) => (
    <li onClick={ onClick } className="item">{item}</li>
)

export default Item;