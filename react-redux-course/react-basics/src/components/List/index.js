import React from 'react';
import Item from '../Item';

const List = ( { itens, removeItem } ) => (
    <ul>
        {
            itens.map( (item, i) => (
                <Item item={item} key={i} onClick={ () => removeItem(item) } />
            ))
        }
    </ul>
);

export default List;